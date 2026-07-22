from fastapi import FastAPI, APIRouter, Query, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Dict, Any
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']

# Email configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'contact@ripplevfxstudios.com')
CAREERS_EMAIL = os.environ.get('CAREERS_EMAIL', 'career@ripplevfxstudios.com')

# Initialize Resend
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Security Headers Middleware
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        
        # Content Security Policy
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://us-assets.i.posthog.com; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: https:; "
            "media-src 'self'; "
            "connect-src 'self' https://us.i.posthog.com; "
            "frame-ancestors 'self';"
        )
        
        # Prevent clickjacking
        response.headers["X-Frame-Options"] = "SAMEORIGIN"
        
        # Prevent MIME type sniffing
        response.headers["X-Content-Type-Options"] = "nosniff"
        
        # Referrer policy
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        
        # XSS Protection (legacy but still useful)
        response.headers["X-XSS-Protection"] = "1; mode=block"
        
        return response


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root() -> Dict[str, str]:
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate) -> StatusCheck:
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(
    skip: int = Query(0, ge=0, description="Number of records to skip"),
    limit: int = Query(50, ge=1, le=100, description="Maximum number of records to return")
) -> List[StatusCheck]:
    # Exclude MongoDB's _id field and add pagination
    status_checks = await db.status_checks.find(
        {}, 
        {"_id": 0}
    ).sort("timestamp", -1).skip(skip).limit(limit).to_list(limit)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

# Add Security Headers Middleware
app.add_middleware(SecurityHeadersMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)



# Pydantic Models for Forms
class ContactFormSubmission(BaseModel):
    name: str
    email: EmailStr
    company: str = ""
    message: str

class CareersFormSubmission(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    position: str
    experience: str
    message: str

# Contact Form Endpoint
@api_router.post("/contact")
async def submit_contact_form(submission: ContactFormSubmission):
    """Handle contact form submissions"""
    try:
        # Create HTML email
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
                    <p><strong>Name:</strong> {submission.name}</p>
                    <p><strong>Email:</strong> {submission.email}</p>
                    <p><strong>Company:</strong> {submission.company or 'N/A'}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">{submission.message}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                    Submitted from: ripplevfxstudios.com
                </p>
            </body>
        </html>
        """
        
        # Send email using Resend
        params = {
            "from": SENDER_EMAIL,
            "to": [CONTACT_EMAIL],
            "subject": f"New Contact Form: {submission.name}",
            "html": html_content
        }
        
        email = await asyncio.to_thread(resend.Emails.send, params)
        
        # Optionally save to database
        db = client[os.environ.get('DB_NAME', 'test_database')]
        await db.contact_submissions.insert_one({
            "name": submission.name,
            "email": submission.email,
            "company": submission.company,
            "message": submission.message,
            "submitted_at": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id")
        })
        
        return {
            "status": "success",
            "message": "Thank you for contacting us! We'll get back to you soon."
        }
    except Exception as e:
        logging.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send message. Please try again later.")

# Careers Form Endpoint
@api_router.post("/careers")
async def submit_careers_form(submission: CareersFormSubmission):
    """Handle careers form submissions"""
    try:
        # Create HTML email
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333;">New Career Application</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
                    <p><strong>Name:</strong> {submission.name}</p>
                    <p><strong>Email:</strong> {submission.email}</p>
                    <p><strong>Phone:</strong> {submission.phone or 'N/A'}</p>
                    <p><strong>Position:</strong> {submission.position}</p>
                    <p><strong>Experience:</strong> {submission.experience}</p>
                    <p><strong>Cover Letter:</strong></p>
                    <p style="white-space: pre-wrap;">{submission.message}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                    Submitted from: ripplevfxstudios.com/careers
                </p>
            </body>
        </html>
        """
        
        # Send email using Resend
        params = {
            "from": SENDER_EMAIL,
            "to": [CAREERS_EMAIL],
            "subject": f"Career Application: {submission.position} - {submission.name}",
            "html": html_content
        }
        
        email = await asyncio.to_thread(resend.Emails.send, params)
        
        # Save to database
        db = client[os.environ.get('DB_NAME', 'test_database')]
        await db.career_applications.insert_one({
            "name": submission.name,
            "email": submission.email,
            "phone": submission.phone,
            "position": submission.position,
            "experience": submission.experience,
            "message": submission.message,
            "submitted_at": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id")
        })
        
        return {
            "status": "success",
            "message": "Application submitted successfully! We'll review it and get back to you soon."
        }
    except Exception as e:
        logging.error(f"Careers form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit application. Please try again later.")

@app.on_event("shutdown")
async def shutdown_db_client() -> None:
    client.close()