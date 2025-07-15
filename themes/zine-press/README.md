---
title: "ZinePress - Indie Web Publishing"
description: "An indie web publication celebrating poetry, essays, and visual art. Built with Jekyll and hosted on the independent web."
---

# ZinePress Theme

A Jekyll theme for independent publications focused on poetry, essays, and visual art. Built with indie web principles and designed for creative communities.

## Features

- **Content Collections**: Separate collections for poetry, essays, and visual art
- **Indie Web Aesthetic**: Clean, typography-focused design with zine-inspired elements
- **Responsive Design**: Works beautifully on all devices
- **Performance Optimized**: Fast loading with minimal JavaScript
- **Accessibility**: Screen reader friendly with proper semantic markup
- **SEO Ready**: Structured data, Open Graph, and Twitter Cards
- **RSS Feed**: Full-content RSS feed for subscribers
- **Mobile Navigation**: Smooth mobile experience

## Quick Start

1. **Install Dependencies**:
   ```bash
   bundle install
   ```

2. **Build and Serve**:
   ```bash
   bundle exec jekyll serve
   ```

3. **Visit**: `http://localhost:4000`

## Configuration

Edit `_config.yml` to customize your site:

```yaml
title: "Your Publication Name"
description: "Your publication description"
url: "https://yoursite.com"
author: "Your Name"

# Social media
social:
  twitter: "yourhandle"
  mastodon: "https://mastodon.social/@yourhandle"
  instagram: "yourhandle"

# Google Analytics (optional)
google_analytics: "G-XXXXXXXXXX"
```

## Content Collections

### Poetry
Create poetry files in `_poetry/` directory:

```yaml
---
layout: post
title: "Your Poem Title"
author: "Author Name"
collection: poetry
date: 2024-01-15
tags: [tag1, tag2]
---

Your poem content here...
```

### Essays
Create essay files in `_essays/` directory:

```yaml
---
layout: post
title: "Your Essay Title"
author: "Author Name"
collection: essays
date: 2024-01-15
tags: [tag1, tag2]
excerpt: "Brief description..."
---

Your essay content here...
```

### Visual Art
Create art files in `_visual_art/` directory:

```yaml
---
layout: post
title: "Artwork Title"
artist: "Artist Name"
collection: visual_art
date: 2024-01-15
medium: "Photography"
tags: [tag1, tag2]
image: "/assets/images/artwork.jpg"
description: "Description of the artwork..."
---

Detailed content about the artwork...
```

## Customization

### Colors
Edit `_sass/zine-press/_base.scss` to customize the color scheme:

```scss
:root {
  --primary-color: #2D3748;
  --secondary-color: #E53E3E;
  --accent-color: #38B2AC;
  --background-color: #F7FAFC;
  --paper-color: #FFFFFF;
  --ink-color: #2D3748;
  --muted-color: #718096;
  --border-color: #E2E8F0;
  --highlight-color: #EDF2F7;
}
```

### Typography
The theme uses Google Fonts:
- **Headings**: Crimson Text (serif)
- **Body**: Source Sans Pro (sans-serif)
- **Code**: Fira Code (monospace)

### Layout
Customize layouts in `_layouts/` directory:
- `default.html`: Base template
- `home.html`: Homepage
- `post.html`: Individual posts
- `page.html`: Static pages
- `poetry.html`: Poetry collection
- `essays.html`: Essays collection
- `visual-art.html`: Visual art collection

## Pages

### Required Pages
- `index.md`: Homepage
- `about.md`: About page
- `contact.md`: Contact page
- `submit.md`: Submission guidelines

### Optional Pages
- `archive.md`: Archive of all posts
- `tags.md`: Tag index
- `privacy.md`: Privacy policy

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Netlify
1. Connect repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`

### Self-Hosted
1. Build site: `bundle exec jekyll build`
2. Upload `_site` directory to web server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This theme is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues:
- Check the documentation
- Open an issue on GitHub
- Contact the maintainers

---

**ZinePress** - Celebrating the indie web and independent publishing since 2024.
