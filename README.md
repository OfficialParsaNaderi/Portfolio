# Parsa Naderi Portfolio Website

Welcome to the portfolio website of Parsa Naderi, a UI/UX Designer and FullStack Developer based in Karaj, Iran. This project showcases a modern, responsive, and visually appealing design with animations and interactive elements, built using HTML, SCSS, and various JavaScript libraries.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview
This is a single-page portfolio website designed to highlight Parsa Naderi's skills, projects, education, experience, and contact information. The site features a dark-mode aesthetic with gradient text effects, smooth animations powered by AOS (Animate On Scroll), and a responsive layout using Bootstrap. It also integrates Swiper.js for testimonials and Font Awesome for icons.

## Features
- **Responsive Design:** Adapts seamlessly across mobile, tablet, and desktop devices.
- **Gradient Text Effects:** Applied to headings using CSS `background-clip: text`.
- **Scroll-Based Animations:** Loader icon rotates on scroll (customizable).
- **Interactive Navigation:** Includes dropdown and mega-menu options.
- **Portfolio Showcase:** Grid-based project cards with hover effects.
- **Testimonials Slider:** Powered by Swiper.js.
- **Contact Form:** Simple form layout with input validation styling.
- **Social Media Links:** Integrated in header and footer.

## Installation
To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/OfficialParsaNaderi/Portfolio.git
   cd parsa-naderi-portfolio
   ```
2. **Install Dependencies:** Ensure you have Node.js and Sass installed globally.
   ```bash
   npm install -g sass
   ```
3. **Compile SCSS to CSS:**
   ```bash
   sass assets/scss/style.scss assets/css/style.css --watch
   ```
4. **Serve the Project:**
   ```bash
   npx http-server .
   ```
   Open your browser to `http://localhost:8080`.

## Usage
- Open `index.html` in a browser to view the portfolio.
- Scroll through the page to see animations and the rotating loader.
- Click navigation links to jump to sections.
- Hover over menu items to reveal dropdowns or the mega-menu.
- Use the Swiper navigation arrows to cycle through testimonials.

## File Structure
```
parsa-naderi-portfolio/
├── assets/
│   ├── css/
│   ├── icons/
│   ├── images/
│   ├── js/
│   ├── scss/
│   └── templates/
├── index.html
└── README.md
```

## Dependencies
- HTML5
- SCSS/Sass
- Bootstrap 5
- Font Awesome
- AOS (Animate On Scroll)
- Swiper.js
- Google Fonts (Syne, Poppins)

## Customization
### Gradient Text
Modify the gradient colors in SCSS:
```scss
h1 {
  background: linear-gradient(to right, rgb(170, 112, 224), rgb(112, 89, 226));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

### Rotating Loader
```scss
.Logo img {
  width: auto;
  height: 125px;
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## Troubleshooting
### Gradient Not Showing:
Ensure the following properties are included for Webkit browsers:
```scss
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Loader Not Rotating:
Ensure `script.js` is created and linked in `index.html`:
```html
<script src="./assets/js/script.js"></script>
```

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.