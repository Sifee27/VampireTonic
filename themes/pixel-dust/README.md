# PixelDust - Retro Pixel Art Jekyll Theme

A retro pixel art theme designed for artists and game developers, featuring hover effects, animated sprites, and a nostalgic gaming aesthetic.

## Features

- 🎮 **Retro Pixel Aesthetic**: Authentic pixel art styling with crisp edges and retro colors
- ✨ **Hover Effects**: Interactive elements that respond to user interaction
- 🌟 **Animated Sprites**: Support for animated pixel art and sprites
- 🎨 **Portfolio Showcase**: Perfect for displaying your pixel art and game projects
- 🎯 **Game Development Focus**: Specialized sections for games and development projects
- 📱 **Mobile Responsive**: Works great on all devices while maintaining the pixel aesthetic
- 🔧 **Customizable**: Easy to customize colors, fonts, and layout
- ⚡ **Performance Optimized**: Fast loading with optimized assets
- 🎪 **Particle Effects**: Matrix-style particle system and scan line effects
- 🌈 **Color Themes**: Matrix green, retro orange, and hot pink color scheme

## Quick Start

1. **Install the theme**:
   ```bash
   gem install pixel-dust
   ```

2. **Add to your Gemfile**:
   ```ruby
   gem "pixel-dust"
   ```

3. **Update your `_config.yml`**:
   ```yaml
   theme: pixel-dust
   ```

4. **Run bundle**:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```

## Configuration

### Site Settings

```yaml
# _config.yml
title: "Your Pixel Art Studio"
description: "Retro pixel art and indie game development"
author: "Your Name"
email: "your-email@example.com"
url: "https://yourdomain.com"

# Theme Settings
theme: pixel-dust

# Hero Section
hero:
  title: "Pixel Perfect Art"
  subtitle: "Creating retro games and pixel art"

# Statistics
stats:
  projects: "50+"
  games: "12"
  clients: "30+"
  downloads: "10K+"

# Social Media
social:
  twitter: "https://twitter.com/yourusername"
  instagram: "https://instagram.com/yourusername"
  github: "https://github.com/yourusername"
  itch: "https://yourusername.itch.io"
  deviantart: "https://deviantart.com/yourusername"
  youtube: "https://youtube.com/@yourusername"
  discord: "https://discord.gg/yourserver"

# Google Analytics
google_analytics: "GA_TRACKING_ID"

# Collections
collections:
  portfolio:
    output: true
    permalink: /:collection/:name/
  games:
    output: true
    permalink: /:collection/:name/
```

### Color Customization

The theme uses CSS custom properties for easy color customization:

```scss
// assets/css/main.scss
:root {
  --primary-color: #00ff41;    // Matrix green
  --secondary-color: #ff6b35;  // Retro orange
  --accent-color: #ff0080;     // Hot pink
  --background-color: #0a0a0a; // Dark background
  --surface-color: #1a1a1a;    // Card backgrounds
  --text-color: #ffffff;       // Main text
}
```

## Content Structure

### Portfolio Items

Create portfolio items in the `_portfolio` directory:

```yaml
---
title: "Your Project Title"
description: "Brief description of your project"
image: "/assets/images/portfolio/project-image.png"
tags: ["pixel-art", "game-dev", "2d"]
demo_url: "https://demo-link.com"
github_url: "https://github.com/user/repo"
---

Add your project details here, including development process, tools used, and challenges overcome.
```

### Game Projects

Create game entries in the `_games` directory:

```yaml
---
title: "Your Game Title"
description: "Brief description of your game"
image: "/assets/images/games/game-screenshot.png"
tags: ["indie", "platformer", "pixel-art"]
play_url: "https://yourgame.com"
itch_url: "https://username.itch.io/yourgame"
platforms: ["Web", "Windows", "Mac"]
status: "Released" # or "In Development"
---

Add your game description, features, and development story here.
```

### Blog Posts

Create blog posts in the `_posts` directory:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-01-15 10:00:00 -0500
author: "Your Name"
tags: ["pixel-art", "tutorial", "game-dev"]
image: "/assets/images/blog/post-image.png"
description: "Brief description for SEO and social media"
---

Your blog post content here.
```

## Customization

### Layouts

The theme includes several layouts:

- `default.html` - Base layout with header and footer
- `home.html` - Homepage with hero section and featured content
- `page.html` - Standard page layout
- `post.html` - Blog post layout with author info and related posts

### Components

The theme includes reusable components:

- **Pixel Cards**: `.pixel-card` for content blocks
- **Pixel Buttons**: `.pixel-btn` with hover effects
- **Pixel Badges**: `.pixel-badge` for tags and labels
- **Portfolio Grid**: `.portfolio-grid` for showcasing work
- **Progress Bars**: `.pixel-progress` for skills or loading
- **Modals**: `.pixel-modal` for lightboxes and popups

### JavaScript Features

- **Particle System**: Animated background particles
- **Matrix Effect**: Digital rain animation
- **Scan Line**: Retro CRT effect
- **Custom Cursor**: Pixel-perfect cursor
- **Glitch Effects**: Random text glitching
- **Smooth Scrolling**: Enhanced navigation
- **Code Copying**: Copy code blocks with one click
- **Portfolio Lightbox**: Image viewing modal

## Typography

The theme uses two main font families:

- **Pixel Font**: 'Press Start 2P' for headings and UI elements
- **Monospace Font**: 'Courier New' for body text and code

## Performance

The theme is optimized for performance:

- Minimal CSS and JavaScript
- Optimized animations with `requestAnimationFrame`
- Lazy loading for images
- Compressed assets
- Efficient SCSS structure

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility

The theme includes accessibility features:

- High contrast mode support
- Reduced motion preferences
- Keyboard navigation
- Screen reader compatibility
- Semantic HTML structure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Credits

- **Fonts**: Press Start 2P by Google Fonts
- **Icons**: Custom pixel art icons
- **Inspiration**: Classic arcade and retro games

## Support

If you encounter any issues or have questions:

1. Check the documentation
2. Search existing issues
3. Create a new issue with details
4. Join the community discussions

---

**PixelDust** - Bringing the retro gaming aesthetic to modern web development!
