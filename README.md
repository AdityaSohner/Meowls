# AI Summer School - 15 Day Program

A beautiful, single-page web application for managing a 15-day Summer School program focused on AI applications with an eco-tech theme.

## 🌿 Features

### User Management
- **Signup & Login System**: Secure authentication with password hashing
- **Maximum 5 Users**: Limited enrollment (signup closes after 5 accounts)
- **Profile Management**: Users can edit photo, country, and stream (name is immutable)
- **Password Change**: Secure password update functionality

### Learning Timeline
- **15-Day Interactive Timeline**: Vertical timeline with smooth animations
- **Date-Based Logic**: 
  - Day 1 (yesterday) = Orientation & Introduction (display-only)
  - Day 2 (today) = Current day
  - Future days are disabled and muted
- **Daily Learning Cards**: Each user can add their learnings for each day
- **Edit Permissions**: Users can only edit their own entries
- **Random Border Colors**: Learning cards have randomized border colors on each render

### UI/UX Design
- **Eco-Tech Theme**: Lush green, teal, and blue gradients
- **Glassmorphism**: Modern glass-effect cards with backdrop blur
- **Circuit Patterns**: Subtle tech-inspired background patterns
- **Smooth Animations**: Hover effects, transitions, and micro-animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Works on desktop, tablet, and mobile

### Navigation
- **Fixed Navbar**: Shows logged-in user with photo and name
- **Smooth Scrolling**: Seamless navigation between sections
- **Hamburger Menu**: Right-side drawer with settings and logout

### Data Persistence
- **LocalStorage**: All data stored in browser (users, sessions, learnings)
- **JSON Objects**: Structured data format for easy management
- **Base64 Images**: Profile photos stored as base64 strings

## 📁 Project Structure

```
Meowl/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with eco-tech theme
├── app.js              # All JavaScript functionality
├── assets/             # Placeholder folder for additional assets
└── README.md           # This file
```

## 🚀 Deployment on GitHub Pages

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it something like `ai-summer-school`

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Summer School app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-summer-school.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/ai-summer-school/`

## 💻 Local Development

Simply open `index.html` in a modern web browser. No build process or server required!

```bash
# Open in default browser (Windows)
start index.html

# Or just double-click index.html
```

## 🎨 Design Highlights

### Color Palette
- **Primary Green**: `hsl(150, 65%, 45%)`
- **Primary Teal**: `hsl(175, 70%, 40%)`
- **Primary Blue**: `hsl(200, 80%, 50%)`
- **Accent Lime**: `hsl(85, 75%, 55%)`
- **Accent Cyan**: `hsl(185, 85%, 60%)`

### Typography
- **Primary Font**: Inter (body text)
- **Display Font**: Outfit (headings)

### Key Animations
- Floating logo animation
- Slide-up modals
- Hover scale effects
- Smooth color transitions
- Pulse loading states

## 📱 Sections

### 1. About Section
- Team logo/banner
- Program description
- Team member cards (5 cards with photo, name, stream, country, bio)
- Problem statement placeholder

### 2. Learnings Section
- 15-day vertical timeline
- Day-specific learning cards
- Expandable day views
- Individual user learning entries

### 3. Hamburger Menu
- Edit Profile
- Change Password
- Dark/Light Mode Toggle
- Logout

## 🔐 Security Notes

- Passwords are hashed using a simple hash function
- For production use, implement proper backend authentication
- Consider using bcrypt or similar for password hashing
- Add HTTPS for secure data transmission

## 🌐 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Requires modern browser with ES6+ support and LocalStorage API.

## 📝 Data Structure

### Users
```json
{
  "name": "Aarav Singh",
  "photo": "data:image/jpeg;base64,...",
  "country": "India",
  "stream": "Computer Science",
  "password": "hashed_password",
  "bio": "Passionate about AI and innovation"
}
```

### Learnings
```json
{
  "2": {
    "Aarav Singh": "Today I learned about...",
    "Jane Doe": "My key takeaway was..."
  },
  "3": {
    ...
  }
}
```

## 🎯 Future Enhancements

- Backend integration with real database
- Email notifications
- File attachments for learnings
- Team chat functionality
- Export learnings as PDF
- Analytics dashboard
- Mobile app version

## 👥 Team

This app supports up to 5 team members who can collaborate and share their daily learnings throughout the 15-day program.

## 📄 License

Free to use for educational purposes.

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
