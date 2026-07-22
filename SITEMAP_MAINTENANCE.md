# Sitemap Maintenance Guide

## Current Sitemap Location
- **File**: `/app/frontend/public/sitemap.xml`
- **Public URL**: `https://ripplevfxstudios.com/sitemap.xml`
- **Referenced in**: `/app/frontend/public/robots.txt`

## Current Pages in Sitemap (11 URLs)

### Main Pages
1. Homepage: `https://ripplevfxstudios.com/`

### Department Sections (Hash Links)
2. Ripple VFX: `https://ripplevfxstudios.com/#ripple-vfx`
3. Ripple Digital: `https://ripplevfxstudios.com/#ripple-digital`

### Content Sections (Hash Links)
4. About: `https://ripplevfxstudios.com/#about`
5. Services: `https://ripplevfxstudios.com/#services`
6. Projects: `https://ripplevfxstudios.com/#projects`
7. Team: `https://ripplevfxstudios.com/#team`
8. Contact: `https://ripplevfxstudios.com/#contact`

### Legal & Career Pages (React Router)
9. Privacy Policy: `https://ripplevfxstudios.com/privacy-policy`
10. Terms of Service: `https://ripplevfxstudios.com/terms-of-service`
11. Careers: `https://ripplevfxstudios.com/careers`

---

## How to Update the Sitemap

### When to Update
Update the sitemap when you:
- Add a new React Router page
- Add a new content section
- Make significant content updates
- Change page priorities

### Manual Update Steps
1. Edit `/app/frontend/public/sitemap.xml`
2. Add new `<url>` entries following the existing format
3. Update `<lastmod>` dates to the current date (format: YYYY-MM-DD)
4. Deploy the updated file

### URL Entry Template
```xml
<url>
  <loc>https://ripplevfxstudios.com/your-page</loc>
  <lastmod>2026-07-21</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Priority Guidelines
- **1.0**: Homepage only
- **0.9-0.95**: Major department/section pages
- **0.8-0.85**: Important pages (Careers, Team, Projects)
- **0.5-0.7**: Legal pages, less critical pages

### Change Frequency Guidelines
- **daily**: News/blog pages (if added)
- **weekly**: Homepage, Projects portfolio
- **monthly**: Most content pages, Careers, Services
- **yearly**: Legal pages (Privacy, Terms)

---

## Automated Update Options (Future Enhancement)

Since this is a static React site, the sitemap must be manually updated. If you need automatic updates, consider:

### Option 1: Build-Time Script
Create a Node.js script that runs during build:
```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const routes = ['/', '/privacy-policy', '/terms-of-service', '/careers'];
// Generate sitemap XML from routes array
```

Add to `package.json`:
```json
"scripts": {
  "build": "react-scripts build && node scripts/generate-sitemap.js"
}
```

### Option 2: Backend Dynamic Sitemap
If you add a real backend API:
- Create a `/api/sitemap.xml` endpoint
- Dynamically generate sitemap from database
- Update robots.txt to point to the API endpoint

### Option 3: CI/CD Integration
- Add sitemap generation to your deployment pipeline
- Automatically update lastmod dates during deployment

---

## Verification Steps

After updating the sitemap:

1. **Validate XML Format**
   ```bash
   curl https://ripplevfxstudios.com/sitemap.xml | xmllint --format -
   ```

2. **Check robots.txt Reference**
   ```bash
   curl https://ripplevfxstudios.com/robots.txt
   ```

3. **Test Accessibility**
   - Visit: `https://ripplevfxstudios.com/sitemap.xml`
   - Should display valid XML in browser

4. **Submit to Search Engines**
   - Google Search Console: Submit sitemap URL
   - Bing Webmaster Tools: Submit sitemap URL

---

## Current Status

✅ Sitemap exists at correct location  
✅ All 11 current pages included  
✅ Referenced in robots.txt  
✅ Follows XML sitemap standard  
✅ Accessible to search engines  
✅ Updated lastmod dates: 2026-07-21  

⚠️ Manual updates required when adding new pages (see options above for automation)

---

## Quick Reference: Adding a New Page

When you add a new page to the website:

1. Open `/app/frontend/public/sitemap.xml`
2. Add new entry before closing `</urlset>` tag:
   ```xml
   <url>
     <loc>https://ripplevfxstudios.com/new-page</loc>
     <lastmod>YYYY-MM-DD</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```
3. Save and deploy
4. Resubmit sitemap to Google Search Console

---

Last Updated: July 21, 2026
