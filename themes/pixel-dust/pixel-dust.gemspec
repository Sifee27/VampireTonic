Gem::Specification.new do |spec|
  spec.name          = "pixel-dust"
  spec.version       = "1.0.0"
  spec.authors       = ["Your Name"]
  spec.email         = ["your.email@example.com"]

  spec.summary       = "A retro pixel theme for artists and game developers"
  spec.description   = "PixelDust is a Jekyll theme designed specifically for artists and game developers who want to showcase their work with a retro pixel aesthetic. Features hover effects, animated sprites, and a nostalgic gaming feel."
  spec.homepage      = "https://github.com/yourusername/pixel-dust"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-sitemap"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll-paginate"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
