# 🍰 DRS Sweets & Restaurant Website

A clean, modern website for **Dev Raj Sohal Sweets & Restaurant** - an authentic Indian sweets shop and restaurant in Jalandhar, Punjab, established in 1985.

## 🌟 Features

✅ **4 Complete Pages**
- Home - Hero section, featured items, about preview
- About - Business story, values, heritage since 1985
- Menu - 20 items with real food images and prices
- Contact - Form, business details, location map

✅ **Design**
- Clean, minimal design with NO colored boxes
- White background with elegant maroon & gold accents
- Real food images from Unsplash
- Professional food photography aesthetic
- Mobile responsive (100%)

✅ **Functionality**
- WhatsApp floating button integration
- Menu category filtering (Sweets, Veg, Non-Veg, Snacks)
- Contact form with WhatsApp submission
- Smooth scroll animations
- Fade-in effects on scroll
- Mobile-friendly navigation

✅ **Technical**
- Pure HTML5, CSS3, Vanilla JavaScript
- No frameworks (no Bootstrap, React, etc.)
- Fast loading, optimized
- SEO friendly with meta tags
- Lazy loading for images
- Font Awesome icons
- Google Fonts (Playfair Display, Inter)

## 📁 Project Structure

```
drs-sweets/
├── index.html          # Home page
├── about.html          # About page
├── menu.html           # Menu with 20 items
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styles (clean, modern)
├── js/
│   └── script.js       # Animations, menu filter, mobile nav
└── README.md           # This file
```

## 🎨 Design Specifications

**Color Scheme:**
- Primary: Deep Maroon `#8B0000`
- Accent: Gold `#D4AF37`
- Background: White `#FFFFFF`
- Text: Dark Gray `#333333`

**Typography:**
- Headings: Playfair Display (elegant serif)
- Body: Inter (clean sans-serif)

**Key Design Choices:**
- ❌ NO colored boxes around items
- ✅ Clean images on white background
- ✅ Subtle hover effects
- ✅ Magazine-style layout
- ✅ Professional food photography

## 📱 Pages Overview

### 1. Home (`index.html`)
- Full-width hero with business name overlay
- Featured 4 specialty items
- About preview section
- Quick services showcase
- CTA buttons to menu & contact

### 2. About (`about.html`)
- Business story since 1985
- Core values (Quality, Authenticity, Love, Community)
- Why choose us section
- High-quality interior/food images

### 3. Menu (`menu.html`)
- **20 Menu Items** organized by category:
  - Sweets (7 items)
  - Veg Dishes (6 items)
  - Non-Veg (4 items)
  - Snacks (3 items)
- Category filter buttons
- Real Unsplash food images
- Clean image + text layout (no boxes!)
- Prices in INR (₹)

### 4. Contact (`contact.html`)
- Contact form (sends to WhatsApp)
- Business information
- Location: Near Rangpuri Chowk, Jalandhar
- Phone, Email, WhatsApp
- Business hours table
- 6 services highlighted
- Google Maps embed

## 🚀 Deploy to Vercel (5 Minutes!)

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (one-time only)
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project folder**
   ```bash
   cd "/Users/rahulkhanna/Desktop/Daily essentials/Website project"
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow prompts
   - Choose "yes" for project settings
   - Done! Get instant live URL

### Method 2: Using Vercel Website (No CLI)

1. **Push to GitHub**
   ```bash
   cd "/Users/rahulkhanna/Desktop/Daily essentials/Website project"
   git init
   git add .
   git commit -m "Initial commit - DRS Sweets website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/drs-sweets.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Click "Deploy"
   - Done! ✅

### Method 3: Drag & Drop

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire project folder
3. Click "Deploy"
4. Get instant URL!

## ⚙️ Customization Guide

### Update Phone Number & WhatsApp

Replace `+91-XXXXXXXXXX` with actual number in these files:
- `index.html` (footer + WhatsApp button)
- `about.html` (footer + WhatsApp button)
- `menu.html` (footer + WhatsApp button)
- `contact.html` (all contact info + WhatsApp button)
- `js/script.js` (line 158 - contact form WhatsApp)

**Find & Replace:** `91XXXXXXXXXX` → `91XXXXXXXXXX` (your real number)

### Update Location Map

In `contact.html`, replace the Google Maps embed URL (around line 150) with your actual location:
1. Go to [Google Maps](https://maps.google.com)
2. Search for "Near Rangpuri Chowk, Jalandhar"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace in `contact.html`

### Change Images

All images use Unsplash URLs. To use your own:
1. Upload images to `images/` folder
2. Replace Unsplash URLs with local paths:
   ```html
   <!-- Before -->
   <img src="https://images.unsplash.com/photo-xxx">
   
   <!-- After -->
   <img src="images/gulab-jamun.jpg">
   ```

### Modify Colors

Edit `css/style.css` root variables (lines 13-20):
```css
:root {
  --primary-maroon: #8B0000;  /* Change this */
  --accent-gold: #D4AF37;     /* Change this */
  /* ... */
}
```

## 📋 Menu Items List

**Sweets (7):**
1. Gulab Jamun - ₹40/pc
2. Rasgulla - ₹350/kg
3. Jalebi - ₹180/kg
4. Kaju Barfi - ₹650/kg
5. Motichoor Ladoo - ₹450/kg
6. Ras Malai - ₹400/kg

**Veg Dishes (6):**
7. Butter Paneer - ₹180
8. Palak Paneer - ₹160
9. Malai Kofta - ₹170
10. Dal Makhni - ₹120
11. Mix Veg - ₹140
12. Shahi Paneer - ₹190

**Non-Veg (4):**
13. Butter Chicken - ₹220
14. Tandoori Chicken - ₹250
15. Fried Chicken - ₹180
16. Fish Fry - ₹200
17. Chicken Tikka - ₹240

**Snacks (3):**
18. Samosa - ₹20/pc
19. Grilled Sandwich - ₹80
20. Pakora - ₹60
21. Aloo Tikki - ₹30

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations
- **JavaScript (ES6)** - Vanilla JS
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Typography
- **Unsplash** - High-quality food images

## 🎯 SEO & Performance

✅ **SEO Optimized:**
- Meta descriptions on all pages
- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy

✅ **Performance:**
- Lazy loading images
- Optimized CSS (no frameworks)
- Minimal JavaScript
- Fast page load (<2s)

## 📞 Support & Contact

**Business:** Dev Raj Sohal Sweets & Restaurant
**Location:** Near Rangpuri Chowk, Jalandhar, Punjab
**Phone:** +91-XXXXXXXXXX (Update this!)
**Email:** info@drssweets.com
**Hours:** 9 AM - 10 PM Daily

## 📄 License

This website is created for Dev Raj Sohal Sweets & Restaurant. All rights reserved © 2026.

---

## 🚀 Quick Start Checklist

- [ ] Update phone numbers (search for `XXXXXXXXXX`)
- [ ] Update WhatsApp number in `js/script.js`
- [ ] Replace Google Maps embed with actual location
- [ ] (Optional) Replace Unsplash images with your food photos
- [ ] Test on mobile devices
- [ ] Deploy to Vercel
- [ ] Share live URL with client!

---

**Made with ❤️ for DRS Sweets**

*Authentic Flavors Since 1985*
