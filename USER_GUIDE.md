# AI Summer School - User Guide

## 🎯 Quick Start

### First Time Setup

1. **Open the Application**
   - Open `index.html` in your browser
   - You'll see the login screen with eco-tech design

2. **Create Your Account**
   - Click "Sign Up" link
   - Fill in all required fields:
     - **Full Name**: Your name in proper case (e.g., "Aarav Singh")
       - ⚠️ This cannot be changed later!
     - **Profile Photo**: Upload a clear photo of yourself
     - **Country**: Your country (e.g., "India")
     - **Stream/Department**: Your field of study (e.g., "Computer Science")
     - **Password**: Create a secure password
   - Click "Sign Up"
   - You'll be automatically logged in

3. **Explore the App**
   - You'll see the main interface with navbar showing your name and photo
   - Scroll down to explore About and Learnings sections

## 📱 Main Features

### Navigation Bar (Top)
- **Left Side**: Your profile badge with photo and name
- **Right Side**: 
  - "About" link - Jump to About section
  - "Learnings" link - Jump to Timeline section
  - Hamburger menu (☰) - Opens settings drawer

### About Section

#### Team Logo & Description
- Left side shows the program logo with animated leaf icon
- Right side contains program description and objectives

#### Team Members
- Horizontal cards showing all registered participants (max 5)
- Each card displays:
  - Profile photo
  - Full name
  - Stream/Department
  - Country with 🌍 icon
  - Personal bio/tagline

#### Problem Statement
- Placeholder text for program challenge description

### Learnings Section (Timeline)

#### Understanding the Timeline
- **15 Days Total**: Vertical timeline with gradient line
- **Day 1 (Yesterday)**: "Orientation & Introduction"
  - Display-only, cannot be edited
  - Shows welcome message
- **Day 2 (Today)**: Current day
  - Clickable and editable
  - You can add your learnings
- **Future Days**: Grayed out and disabled
  - Will unlock as days progress
  - Shows "Coming soon..."

#### How to Add Learnings

1. **Click on a Day Card** (Day 2 onwards, up to today)
   - Hover to see preview
   - Click "Expand" button

2. **View All Team Learnings**
   - Modal opens showing learning cards for each team member
   - Each card has:
     - User photo and name
     - Stream and country
     - Learning content area
     - Random colored border (changes on each load)

3. **Edit Your Learning**
   - Find your card (only you can edit yours)
   - Click "Edit" button
   - Type your learnings in the text area
   - Click "Save" to save
   - Your entry is stored in browser's LocalStorage

4. **View Others' Learnings**
   - You can read what others wrote
   - You cannot edit other people's entries
   - Empty entries show: "To be filled by user end of day"

### Hamburger Menu (Settings)

Click the hamburger icon (☰) to access:

#### 1. Edit Profile
- **Cannot Change**: Your full name (immutable)
- **Can Change**:
  - Profile photo (upload new image)
  - Country
  - Stream/Department
- Click "Save Changes" to update

#### 2. Change Password
- Enter current password
- Enter new password
- Confirm new password
- Click "Update Password"

#### 3. Dark/Light Mode Toggle
- Switch between themes
- Preference is saved in browser
- Smooth color transitions

#### 4. Logout
- Logs you out of the application
- Returns to login screen
- Your data remains saved

## 🎨 Design Features

### Visual Elements
- **Glassmorphism**: Frosted glass effect on cards
- **Gradients**: Green → Teal → Blue color scheme
- **Circuit Patterns**: Subtle tech-inspired backgrounds
- **Animations**: 
  - Floating logo
  - Hover scale effects
  - Smooth transitions
  - Slide-up modals

### Color Scheme
- **Primary**: Lush greens and teals
- **Accent**: Bright blues and cyans
- **Background**: Light/dark mode adaptive
- **Text**: High contrast for readability

### Responsive Design
- Works on desktop, tablet, and mobile
- Timeline adapts to screen size
- Cards stack on smaller screens
- Touch-friendly buttons

## 💾 Data Management

### What's Stored
All data is stored in your browser's LocalStorage:

1. **User Accounts** (max 5)
   - Name, photo (base64), country, stream, password (hashed)

2. **Current Session**
   - Currently logged-in user

3. **Daily Learnings**
   - Organized by day and username
   - Text content for each entry

### Important Notes
- ⚠️ **Data is browser-specific**: Different browsers have separate storage
- ⚠️ **Data is domain-specific**: localhost vs deployed site are different
- ⚠️ **Don't clear browser data**: You'll lose all accounts and learnings
- ✅ **Data persists**: Even after closing browser

## 🔐 Security & Privacy

### Password Security
- Passwords are hashed before storage
- Cannot be retrieved in plain text
- Use strong, unique passwords

### Photo Storage
- Photos converted to base64 format
- Stored directly in browser
- No external server uploads

### Account Limits
- Maximum 5 users allowed
- Signup closes after 5th account
- Prevents unlimited account creation

## 📅 Timeline Logic

### Date Calculation
- **Program Start**: Yesterday (Day 1)
- **Today**: Day 2
- **Automatic**: Days unlock based on actual calendar dates

### Day Status
- **Past Days** (Day 1 - Today): Accessible
- **Day 1**: Display-only (Orientation)
- **Day 2 onwards**: Editable
- **Future Days**: Locked until date arrives

### Daily Topics
1. Day 1: Orientation & Introduction
2. Day 2: Fundamentals of AI
3. Day 3: Machine Learning Basics
4. Day 4: Deep Learning Concepts
5. Day 5: Neural Networks
6. Day 6: Computer Vision
7. Day 7: Natural Language Processing
8. Day 8: AI Ethics & Responsibility
9. Day 9: Eco-Tech Applications
10. Day 10: Sustainable AI Solutions
11. Day 11: Project Ideation
12. Day 12: Project Development I
13. Day 13: Project Development II
14. Day 14: Final Presentations
15. Day 15: Closing & Certification

## 🎓 Best Practices

### Daily Learning Entries
- **Be Specific**: Write clear, detailed learnings
- **Daily Updates**: Add entries at end of each day
- **Reflect**: Include key takeaways and insights
- **Collaborate**: Read others' entries for different perspectives

### Profile Management
- **Professional Photo**: Use clear, appropriate image
- **Accurate Info**: Keep country and stream up to date
- **Secure Password**: Use strong password, change if needed

### Team Collaboration
- **Respect Privacy**: Don't share others' learnings without permission
- **Engage**: Read and learn from teammates' entries
- **Support**: Encourage team members to contribute daily

## 🐛 Troubleshooting

### Can't Login
- Check username spelling (case-sensitive)
- Verify password
- Try "Sign Up" if first time

### Photo Not Uploading
- Check file format (JPG, PNG supported)
- Ensure file size is reasonable (<5MB)
- Try different browser if issues persist

### Learning Not Saving
- Click "Save" button after editing
- Check browser console (F12) for errors
- Ensure LocalStorage is enabled

### Timeline Not Showing Correctly
- Check system date/time is correct
- Refresh page (F5)
- Clear cache and reload

### Dark Mode Not Working
- Toggle switch in hamburger menu
- Check if browser supports dark mode
- Preference saves automatically

## 📱 Mobile Usage

### Mobile-Friendly Features
- Responsive layout
- Touch-optimized buttons
- Simplified navigation on small screens
- Vertical timeline adapts

### Mobile Tips
- Use landscape for better timeline view
- Tap and hold for hover effects
- Swipe to scroll smoothly
- Use native keyboard for text entry

## 🌟 Tips & Tricks

1. **Keyboard Shortcuts**
   - Tab: Navigate between form fields
   - Enter: Submit forms
   - Esc: Close modals (if implemented)

2. **Smooth Scrolling**
   - Click nav links for smooth scroll
   - Works on all modern browsers

3. **Color Variety**
   - Learning card borders randomize on each load
   - Refresh for new color combinations

4. **Theme Persistence**
   - Dark/light mode saves automatically
   - Applies on next visit

5. **Data Backup**
   - Consider taking screenshots of learnings
   - Export browser data periodically
   - No built-in export (yet)

## 🎉 Getting the Most Out of the Program

### Week 1 (Days 1-5): Foundations
- Focus on understanding AI fundamentals
- Take detailed notes in daily learnings
- Engage with team members' insights

### Week 2 (Days 6-10): Applications
- Explore practical AI applications
- Think about eco-tech solutions
- Start brainstorming project ideas

### Week 3 (Days 11-15): Project & Wrap-up
- Develop your project
- Document progress daily
- Prepare for final presentation
- Celebrate completion!

---

**Need Help?** Check the README.md for technical details or DEPLOYMENT.md for hosting instructions.

**Enjoy your AI Summer School journey! 🌿🤖**
