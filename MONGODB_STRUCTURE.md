# MongoDB Collections Structure for Ripple VFX Studios

## Database: ripple_vfx_db

### Collections

#### 1. contact_submissions
```json
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "company": String,
  "message": String,
  "submitted_at": ISODate,
  "email_id": String,
  "status": String  // "new", "read", "replied", "archived"
}
```

#### 2. career_applications
```json
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "phone": String,
  "position": String,
  "experience": String,
  "message": String,
  "portfolio": String,
  "submitted_at": ISODate,
  "email_id": String,
  "status": String  // "new", "reviewing", "interviewed", "rejected", "hired"
}
```

#### 3. projects (Future)
```json
{
  "_id": ObjectId,
  "title": String,
  "description": String,
  "category": String,  // "vfx" or "digital"
  "year": String,
  "image": String,
  "tags": [String],
  "featured": Boolean,
  "published": Boolean,
  "created_at": ISODate,
  "updated_at": ISODate
}
```

#### 4. team_members (Future)
```json
{
  "_id": ObjectId,
  "name": String,
  "role": String,
  "bio": String,
  "image": String,
  "department": String,  // "vfx" or "digital"
  "linkedin": String,
  "portfolio": String,
  "order": Number,
  "active": Boolean
}
```

#### 5. services (Future)
```json
{
  "_id": ObjectId,
  "title": String,
  "description": String,
  "icon": String,
  "department": String,  // "vfx" or "digital"
  "featured": Boolean,
  "order": Number,
  "active": Boolean
}
```

---

## Indexes

### contact_submissions
- email (ascending)
- submitted_at (descending)
- status (ascending)

### career_applications
- email (ascending)
- position (ascending)
- submitted_at (descending)
- status (ascending)

### projects
- category (ascending)
- featured (descending)
- year (descending)

### team_members
- department (ascending)
- order (ascending)

---

## Usage

### Current (Implemented)
- ✅ contact_submissions - Stores all contact form submissions
- ✅ career_applications - Stores all career applications

### Future Enhancements
- ⏳ projects - Dynamic project portfolio
- ⏳ team_members - Dynamic team management
- ⏳ services - Dynamic service listings
- ⏳ Admin dashboard for content management

---

## Access

All collections are accessible via the MongoDB client in `/app/backend/server.py`

```python
from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Example: Query contact submissions
submissions = await db.contact_submissions.find({}).to_list(100)

# Example: Update application status
await db.career_applications.update_one(
    {"_id": application_id},
    {"$set": {"status": "reviewing"}}
)
```
