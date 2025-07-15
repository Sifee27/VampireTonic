Gem::Specification.new do |spec|
  spec.name          = "quick-docs"
  spec.version       = "1.0.0"
  spec.authors       = ["[Your Name]"]
  spec.email         = ["[your-email@domain.com]"]

  spec.summary       = "A simple documentation theme with auto-generated sidebar and multi-version docs support"
  spec.description   = "QuickDocs is a Jekyll theme designed for technical documentation. It features auto-generated navigation, multi-version support, search functionality, and a clean, professional design optimized for reading documentation."
  spec.homepage      = "[Your theme homepage URL]"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-toc", "~> 0.17"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
