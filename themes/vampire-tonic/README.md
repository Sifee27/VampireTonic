# Vampire Tonic Jekyll Theme 🧛

A dark, gothic Jekyll theme with vampire aesthetics and mysterious atmosphere.

## Features

- **Dark Gothic Design**: Deep crimsons, blacks, and dark purples
- **Vampire Effects**: Blood-red accents, dark particles, gothic animations
- **Responsive Layout**: Works perfectly on all devices
- **Typing Animations**: Atmospheric text effects
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Ready**: Optimized for search engines
- **Blog Ready**: Beautiful post layouts and archive pages

## Quick Start

### Installation

```bash
# Clone or download the theme
cd themes/vampire-tonic

# Install dependencies
bundle install

# Serve the site
bundle exec jekyll serve --port 4000 --host 0.0.0.0
```

Visit `http://localhost:4000` to see your site.

### Customization

#### 1. Site Configuration
Edit `_config.yml` to customize:
- Site title and description
- Social media links
- Navigation menu
- Google Analytics
- Contact information

#### 2. Content Pages
- **Homepage** (`index.md`): Hero section, featured posts, about preview
- **About** (`about.md`): Your story and background
- **Contact** (`contact.md`): Contact form and information

#### 3. Blog Posts
Add new posts in `_posts/` following the format:
```
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS
categories: [category1, category2]
---

Your content here...
```

#### 4. Styling
Customize colors and styling in:
- `_sass/vampire-tonic/_base.scss` - Base styles and colors
- `_sass/vampire-tonic/_layout.scss` - Layout components
- `_sass/vampire-tonic/_components.scss` - UI components

## Color Palette

```scss
// Primary Colors
$primary-color: #8B0000;     // Dark red
$secondary-color: #2D1B2E;   // Dark purple
$accent-color: #FF6B6B;      // Bright red

// Background Colors
$bg-primary: #0A0A0A;        // Almost black
$bg-secondary: #1A1A1A;      // Dark gray
$bg-card: #2A2A2A;           // Card background

// Text Colors
$text-primary: #FFFFFF;       // White
$text-secondary: #CCCCCC;     // Light gray
$text-accent: #FF6B6B;        // Red accent
```

## Troubleshooting

### Common Issues

**Site not building?**
- Check Ruby and Jekyll versions
- Run `bundle install` to install dependencies
- Check for syntax errors in YAML front matter

**Animations not working?**
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify CSS animations are supported

## License

MIT License - feel free to use this theme for personal and commercial projects.

---

*Embrace the darkness with Vampire Tonic* 🧛‍♂️