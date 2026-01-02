# THYESHAN 
### Health Products
#### Health Tips and Guides
# Avatar Agentic AI Website

A modern, responsive 3-page website featuring AI Avatar technology powered by HeyGen.

## Features

- 3 pages with consistent navigation
- 80/20 split layout (content/navigation)
- Responsive design for all devices
- Smooth animations and transitions
- HeyGen avatar integration on Page 2
- Professional company branding

## Deployment on Render.com

### Prerequisites
- A Render.com account
- Git repository with this code

### Deployment Steps

1. **Prepare your repository:**
   - Create a new Git repository
   - Add all files to the repository
   - Push to GitHub, GitLab, or Bitbucket

2. **Deploy on Render:**
   - Log in to [Render.com](https://render.com)
   - Click "New +" and select "Static Site"
   - Connect your Git repository
   - Configure the deployment:
     - **Name:** avatar-agentic-ai
     - **Build Command:** (leave empty)
     - **Publish Directory:** `.` (current directory)
   - Click "Create Static Site"

3. **Add your logo image:**
   - Create a `static/images` directory
   - Upload `AvAgAi-Gem.jpg` to this directory
   - Commit and push changes

### File Structure
project/
├── index.html          # Page 1 - Home with logo
├── page2.html          # Page 2 - HeyGen avatar
├── page3.html          # Page 3 - Under development
├── style.css           # All styles
├── script.js           # JavaScript functionality
├── static/
│   └── images/
│       └── AvAgAi-Gem.jpg  # Company logo
└── README.md

## Local Development

1. Clone the repository
2. Place your logo image in `static/images/AvAgAi-Gem.jpg`
3. Open `index.html` in a browser
4. No build process required!

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript
- Google Fonts (Orbitron & Roboto)
- HeyGen Avatar API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-blue: #1e3a8a;
    --secondary-blue: #3b82f6;
    --yellow-ochre: #d4a574;
}
