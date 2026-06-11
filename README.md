# We Are Real Web-Developers

Professional portfolio website for web development services. Built with modern web technologies following pixel-perfect design specifications from Figma.

## Project Overview

This is a fully responsive, single-page website showcasing web development services with multiple sections including hero, skills gallery, blog posts, newsletter subscription, and footer.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet (1024px) and mobile (768px)
- **Semantic HTML5**: Proper markup structure with accessibility attributes (ARIA labels, roles)
- **SCSS Architecture**: Modular SCSS with organized file structure (variables, mixins, components)
- **CSS Grid Layouts**: Complex asymmetric grids for gallery and blog posts
- **Interactive Elements**: Hamburger menu with overlay, hover effects on buttons and gallery items
- **Form Validation**: Proper form semantics with input focus states
- **Performance**: Optimized build with Vite

## Tech Stack

- **Build Tool**: Vite
- **Styling**: SCSS (Dart Sass)
- **JavaScript**: Vanilla JS for hamburger menu interaction
- **Fonts**: Roboto, Roboto Slab from Google Fonts
- **Icons**: Font Awesome 6.5.0

## Project Structure

```
src/
├── scss/
│   ├── main.scss           # Main SCSS file
│   ├── _reset.scss         # CSS reset
│   ├── _variables.scss     # Colors, fonts, breakpoints
│   ├── _mixins.scss        # Reusable mixins
│   ├── _header.scss        # Header & navigation
│   ├── _hero.scss          # Hero section
│   ├── _gallery.scss       # Skills gallery
│   ├── _ready.scss         # "Are You Ready?" section
│   ├── _subscribe.scss     # Newsletter form
│   ├── _posts.scss         # Blog posts grid
│   └── _footer.scss        # Footer with social links
├── js/
│   ├── hamburger.js        # Mobile menu toggle
│   └── main.js             # Entry point
└── assets/
    └── images/             # Images from Figma design

index.html                  # Main HTML file
package.json               # Dependencies
vite.config.js             # Vite configuration
```

## Sections

### 1. Header
- Sticky navigation bar with logo and menu
- Mobile hamburger menu with overlay backdrop
- Active state indication on current page

### 2. Hero
- Full-viewport banner with background image
- Overlay effect (rgba(45, 54, 81, 0.8))
- Call-to-action buttons with hover states

### 3. Skills Gallery
- 4-column asymmetric grid layout
- 9 skill items with images and labels
- Hover effects with color transitions
- "View all skills" button

### 4. Are You Ready?
- Flex layout with text content and lamp image
- Separator line divider
- Lorem ipsum placeholder text

### 5. Newsletter Subscribe
- 3-column form with name and email inputs
- Focus states with enhanced visibility
- Submit button with hover effect

### 6. Blog Posts
- 4-column asymmetric grid
- 6 blog post cards with images and captions
- Responsive grid that adapts to tablet/mobile
- "View all posts" button

### 7. Footer
- Dark background with social media icons
- First icon (Facebook) highlighted in orange
- Brand text with typography hierarchy
- Horizontal divider line

## Installation & Usage

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will be available at `http://localhost:5173`

## Color Palette

- **Primary Dark**: `#2D3651`
- **Accent Orange**: `#D66926`
- **Text Gray**: `#637585`
- **Card Background**: `#EEEEEE`
- **Light Background**: `#E5E5E5`
- **White**: `#ffffff`

## Typography

- **Heading Font**: Roboto Slab (300, 700 weights)
  - Hero title: 60px, weight 300
  - Section headings: 40px, weight 700
  - Post titles: 18px, weight 700

- **Body Font**: Roboto (100, 400, 700 weights)
  - Body text: 18px, weight 400
  - Labels: 20px, weight 700
  - Footer: 16px, weight 100/700

## Responsive Breakpoints

- **Desktop**: 1300px+ (full width)
- **Tablet**: Up to 1024px
- **Mobile**: Up to 768px
- **Small Mobile**: Up to 480px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels on form inputs and buttons
- `aria-current="page"` on active navigation link
- `aria-expanded` on hamburger menu button
- Alt text on all images
- Proper color contrast ratios
- Keyboard navigation support

## Performance

- Optimized images with proper formats
- CSS Grid for efficient layouts
- Hardware-accelerated transitions
- Minimal JavaScript footprint

## Deployment

This project is configured for deployment on GitHub Pages.

```bash
# Build production files
npm run build

# Push to gh-pages branch
git push origin main
```

GitHub Pages will automatically serve from the `dist/` folder.

## Code Conventions

- BEM (Block Element Modifier) naming for CSS classes
- Semantic HTML tags (`<section>`, `<article>`, `<nav>`, `<form>`)
- Mobile-first responsive design
- SCSS modules with `@use` syntax
- Meaningful variable names and comments only for non-obvious logic

## Known Issues & Future Improvements

- Placeholder images from Figma should be replaced with actual content
- Form submission handling not implemented (backend required)
- Scroll animations not yet implemented
- Counter animations not yet implemented

## License

This project is for educational purposes.

## Contact

For questions or feedback, please contact: mc.shel24@gmail.com

---

**Last Updated**: June 2026  
**Status**: Complete - Ready for deployment