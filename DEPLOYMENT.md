# 🚀 QUICK DEPLOYMENT GUIDE

## Deploy to Vercel in 3 Steps

### Option 1: One-Click Deploy (Easiest!)

1. Open Terminal and navigate to project:
   ```bash
   cd "/Users/rahulkhanna/Desktop/Daily essentials/Website project"
   ```

2. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

3. Deploy:
   ```bash
   vercel
   ```
   
   Answer the prompts:
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N**
   - What's your project name? **drs-sweets** (or any name)
   - In which directory is your code located? **./** (press Enter)
   - Want to modify settings? **N**

4. **DONE!** 🎉 Copy the deployment URL and visit it!

---

## Option 2: Via GitHub + Vercel (Recommended for updates)

### Step 1: Push to GitHub

```bash
cd "/Users/rahulkhanna/Desktop/Daily essentials/Website project"

# Initialize git
git init
git add .
git commit -m "Initial commit: DRS Sweets website"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/drs-sweets.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. **Import** your GitHub repository
5. Click **"Deploy"**
6. Wait 30-60 seconds
7. **DONE!** Get your live URL

---

## Option 3: Drag & Drop (No code needed!)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire **"Website project"** folder onto the page
3. Click **"Deploy"**
4. **DONE!** Instant live website

---

## 📝 Before Deploying - Update These:

### 1. Phone Number (CRITICAL!)

Search and replace `XXXXXXXXXX` with real number in:
- [ ] `index.html`
- [ ] `about.html`
- [ ] `menu.html`
- [ ] `contact.html`
- [ ] `js/script.js` (line 158)

### 2. WhatsApp Number

In all files, update:
```
91XXXXXXXXXX → 919876543210 (example)
```

### 3. Google Maps (Optional)

In `contact.html`, update the map embed with actual location

---

## ✅ Test Before Launch

1. Open `index.html` in browser locally
2. Check all pages load
3. Test mobile view (right-click → Inspect → Toggle device)
4. Click WhatsApp button - does it work?
5. Test contact form
6. Check all images load

---

## 🔄 Update Website After Deployment

If using GitHub + Vercel:

```bash
# Make changes to files, then:
git add .
git commit -m "Updated phone number and menu"
git push
```

Vercel automatically redeploys! ✨

---

## 🆘 Troubleshooting

**Problem:** Images not loading
- **Fix:** Check internet connection; Unsplash URLs need internet

**Problem:** WhatsApp not working
- **Fix:** Update phone number in files (search for XXXXXXXXXX)

**Problem:** Vercel CLI not found
- **Fix:** Run `npm install -g vercel` first

**Problem:** Site looks broken on mobile
- **Fix:** It's already responsive! Clear browser cache

---

## 📧 Support

Need help? Check:
- README.md for full documentation
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

---

**Last Updated:** February 2026
**Website:** DRS Sweets & Restaurant
**Status:** ✅ Production Ready
