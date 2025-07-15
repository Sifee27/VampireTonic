# Jekyll Themes Collection

This directory contains four beautiful Jekyll themes, each with its own unique design and purpose.

## Themes Overview

### 🧛 Vampire Tonic (`vampire-tonic/`)
**A dark, gothic theme with vampire aesthetics**
- **Color Scheme**: Deep crimsons, blacks, and dark purples
- **Style**: Gothic, mysterious, elegant
- **Effects**: Typing animations, blood-red accents, dark atmosphere
- **Best For**: Creative portfolios, dark-themed blogs, gothic brands
- **Port**: 4000

### ❄️ Arctic Magical (`arctic-magical/`)
**An ice and snow themed magical winter experience**
- **Color Scheme**: Ice blues, whites, and silver tones
- **Style**: Magical, ethereal, winter wonderland
- **Effects**: Aurora animations, snowflake particles, ice crystals
- **Best For**: Winter brands, magical themes, creative showcases
- **Port**: 4001

### 🌲 Nature Explorer (`nature-explorer/`)
**An outdoor adventure and nature exploration theme**
- **Color Scheme**: Forest greens, earth tones, natural browns
- **Style**: Outdoor, adventurous, natural
- **Effects**: Leaf particles, nature animations, organic feel
- **Best For**: Outdoor brands, hiking blogs, nature photography
- **Port**: 4003

### 💜 Purple Elegance (`purple-elegance/`)
**A sophisticated purple theme for creative professionals**
- **Color Scheme**: Royal purples, elegant gradients, luxurious tones
- **Style**: Elegant, sophisticated, professional
- **Effects**: Purple particles, gradient waves, luxury animations
- **Best For**: Creative agencies, luxury brands, professional portfolios
- **Port**: 4002

## Getting Started

### Prerequisites
- Ruby 3.4.1 or higher
- Jekyll 4.4.0 or higher
- Bundler

### Running a Theme

1. Navigate to the theme directory:
   ```bash
   cd themes/[theme-name]
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site:
   ```bash
   bundle exec jekyll serve --port [port-number] --host 0.0.0.0
   ```

### Port Assignments
- Vampire Tonic: `localhost:4000`
- Arctic Magical: `localhost:4001`
- Purple Elegance: `localhost:4002`
- Nature Explorer: `localhost:4003`

## Theme Structure

Each theme follows standard Jekyll conventions:

```
theme-name/
├── _config.yml          # Theme configuration
├── _includes/           # Reusable components
├── _layouts/            # Page templates
├── _posts/              # Blog posts
├── _sass/               # Sass stylesheets
├── assets/              # Static assets
├── Gemfile              # Ruby dependencies
├── *.gemspec           # Theme gem specification
├── index.md            # Homepage
├── about.md            # About page
├── contact.md          # Contact page
└── README.md           # Theme documentation
```

## Customization

### Template Instructions
Each theme includes template instructions in key files:
- **Homepage**: Sections marked with `[Your Content]` placeholders
- **About Page**: Template sections for company information
- **Contact Page**: Customizable contact forms and information
- **Configuration**: Theme-specific settings in `_config.yml`

### Color Customization
Each theme has its own color system defined in:
- `_sass/[theme-name]/_base.scss` - Base color variables
- `_sass/[theme-name]/_components.scss` - Component colors
- `_sass/[theme-name]/_layout.scss` - Layout-specific colors

### Content Customization
1. Replace placeholder content in `.md` files
2. Update `_config.yml` with your site information
3. Add your own blog posts in `_posts/`
4. Customize navigation in `_config.yml`

## Theme Features

### All Themes Include:
- ✅ Responsive design
- ✅ Modern CSS Grid and Flexbox layouts
- ✅ Accessibility compliance
- ✅ SEO optimization
- ✅ Google Analytics integration
- ✅ Social media integration
- ✅ Custom animations and effects
- ✅ Performance optimization
- ✅ Cross-browser compatibility

### Advanced Features:
- 🎨 Custom particle systems
- 🎭 Unique animation effects
- 📱 Mobile-first design
- 🔍 Search functionality
- 💌 Newsletter integration
- 📊 Statistics counters
- 🎪 Portfolio showcases
- 📝 Blog functionality

## Development

### Building for Production
```bash
bundle exec jekyll build
```

### Development with Live Reload
```bash
bundle exec jekyll serve --livereload
```

### Theme Development
Each theme can be developed independently. Changes to one theme won't affect others.

## Deployment

### GitHub Pages
Each theme can be deployed to GitHub Pages by:
1. Creating a new repository for the theme
2. Copying the theme files to the repository
3. Enabling GitHub Pages in repository settings

### Other Platforms
These themes work with any Jekyll-compatible hosting platform:
- Netlify
- Vercel
- AWS S3
- Digital Ocean
- Custom servers

## License

Each theme is open source and available under the MIT License.

## Support

For questions or issues with any theme, please check the individual theme's README file or create an issue in the repository.

---

*Created with ❤️ by GitHub Copilot*
