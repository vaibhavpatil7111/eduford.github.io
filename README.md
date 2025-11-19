# Eduford - University Website

A modern, responsive university website built with HTML, CSS, and JavaScript featuring a dynamic navigation system and engaging user interface.

🌐 **Live Demo:** https://vaibhavpatil7111.github.io/eduford.github.io/

## 📋 Table of Contents
- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🧭 Dynamic Navigation
- **Reusable navbar component** - Single source navbar across all pages
- **Transparent navbar** - Becomes transparent over hero sections
- **Scroll-based styling** - Changes background on scroll
- **Mobile responsive** - Hamburger menu for mobile devices
- **Smooth transitions** - CSS animations for better UX

### 🎨 Modern Design
- **Responsive layout** - Works on all device sizes
- **Hero sections** - Eye-catching banners on each page
- **Interactive elements** - Hover effects and animations
- **Professional styling** - Clean, modern university aesthetic
- **Font Awesome icons** - Beautiful iconography throughout

### 📱 Mobile First
- **Responsive design** - Mobile-first approach
- **Touch-friendly** - Optimized for mobile interactions
- **Fast loading** - Optimized images and code

## 📄 Pages

1. **Home (index.html)**
   - Hero section with call-to-action
   - Course offerings overview
   - Global campus showcase
   - Facilities highlights
   - Student testimonials

2. **About Us (about us.html)**
   - University information
   - Mission and vision
   - Image gallery

3. **Courses (course.html)**
   - Available programs
   - Course details
   - Facilities information

4. **Blog (blog.html)**
   - Latest news and updates
   - Certificate programs
   - Comment system
   - Category sidebar

5. **Contact (contact.html)**
   - Interactive contact form
   - Google Maps integration
   - Contact information
   - Location details

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox
- **JavaScript (ES6)** - Dynamic functionality
- **Font Awesome** - Icon library
- **Google Maps** - Location integration
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
eduford.github.io/
├── index.html          # Home page
├── about us.html       # About page
├── course.html         # Courses page
├── blog.html          # Blog page
├── contact.html       # Contact page
├── style.css          # Main stylesheet
├── navbar.js          # Reusable navbar component
├── img/               # Image assets
│   ├── logo.png
│   ├── banner.png
│   ├── background.jpg
│   └── ...
└── README.md          # Project documentation
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhavpatil7111/eduford.github.io.git
   ```

2. **Navigate to project directory**
   ```bash
   cd eduford.github.io
   ```

3. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local server for better development experience

## 💻 Usage

### Local Development
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Then open http://localhost:8000
```

### GitHub Pages Deployment
The site is automatically deployed via GitHub Pages when changes are pushed to the main branch.

## 🎨 Customization

### Navbar Modification
Edit `navbar.js` to modify navigation links:
```javascript
// Update navigation links in loadNavbar() function
<li><a href="your-page.html">YOUR PAGE</a></li>
```

### Styling Changes
Modify `style.css` for design updates:
```css
/* Update color scheme */
:root {
  --primary-color: #f44336;
  --secondary-color: #fff;
}
```

### Content Updates
- Replace images in `/img` folder
- Update text content in HTML files
- Modify contact information in `contact.html`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨💻 Author

**Vaibhav Patil**
- GitHub: [@vaibhavpatil7111](https://github.com/vaibhavpatil7111)
- Website: [Eduford University](https://vaibhavpatil7111.github.io/eduford.github.io/)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Maps for location services
- Inspiration from modern university websites

---

⭐ **Star this repository if you found it helpful!**