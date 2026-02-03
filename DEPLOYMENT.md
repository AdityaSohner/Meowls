# GitHub Pages Deployment Guide

## Quick Deployment Steps

### Option 1: Using Git Command Line

1. **Initialize Git Repository**
   ```bash
   cd c:/Users/adity/Desktop/Temp/Meowl
   git init
   git add .
   git commit -m "Initial commit: AI Summer School web app"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `ai-summer-school` (or any name you prefer)
   - Keep it public
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-summer-school.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

5. **Access Your Site**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/ai-summer-school/`

### Option 2: Using GitHub Desktop (Easier)

1. **Download GitHub Desktop**
   - Download from: https://desktop.github.com/

2. **Add Repository**
   - Open GitHub Desktop
   - File → Add Local Repository
   - Choose: `c:/Users/adity/Desktop/Temp/Meowl`
   - Click "Create Repository" if prompted

3. **Publish to GitHub**
   - Click "Publish repository" button
   - Name: `ai-summer-school`
   - Keep "Keep this code private" unchecked
   - Click "Publish repository"

4. **Enable GitHub Pages**
   - Go to your repository on GitHub (click "View on GitHub" in GitHub Desktop)
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

5. **Done!**
   - Your site will be live in 1-2 minutes
   - URL: `https://YOUR_USERNAME.github.io/ai-summer-school/`

## Testing Locally

Before deploying, test locally:

1. **Open in Browser**
   ```bash
   start index.html
   ```
   Or simply double-click `index.html`

2. **Test All Features**
   - [ ] Signup (create 1-2 test accounts)
   - [ ] Login
   - [ ] View About section
   - [ ] Check Timeline (Day 1 should be display-only, Day 2 clickable)
   - [ ] Add learning entry for Day 2
   - [ ] Edit profile
   - [ ] Change password
   - [ ] Toggle dark mode
   - [ ] Logout and login again

## Important Notes

### LocalStorage Persistence
- All data is stored in browser's LocalStorage
- Data is specific to the domain/URL
- If you test locally and then deploy, you'll need to re-create accounts on the deployed version
- Each browser has separate LocalStorage

### Browser Compatibility
- Works best on Chrome, Edge, Firefox, Safari
- Requires modern browser with ES6+ support
- Mobile responsive design included

### Security Considerations
- This is a client-side only app (no backend)
- Passwords are hashed but stored in browser
- For production use, implement proper backend authentication
- Consider adding HTTPS (GitHub Pages provides this automatically)

### Customization
You can customize:
- Colors in `styles.css` (see CSS variables at top)
- Day titles in `app.js` (search for `dayTitles` array)
- Program start date in `app.js` (search for `PROGRAM_START_DATE`)
- Maximum users (change `MAX_USERS` in `app.js`)

## Troubleshooting

### Issue: Site not loading on GitHub Pages
- Wait 2-3 minutes after enabling Pages
- Check that branch is set to "main"
- Ensure `index.html` is in root directory
- Clear browser cache and try again

### Issue: LocalStorage data lost
- Don't clear browser data/cache
- Data is domain-specific (localhost vs github.io are different)
- Export important data before clearing browser

### Issue: Images not showing
- Check that photos are being uploaded during signup
- Verify browser supports FileReader API
- Check browser console for errors (F12)

## Support

For issues or questions:
1. Check browser console (F12) for errors
2. Verify all files are present (index.html, styles.css, app.js)
3. Test in different browser
4. Check GitHub Pages deployment status

---

Happy deploying! 🚀
