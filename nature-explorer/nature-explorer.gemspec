# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "nature-explorer"
  spec.version       = "1.0.0"
  spec.authors       = ["Nature Explorer"]
  spec.email         = ["explorer@naturetrails.com"]

  spec.summary       = "A Jekyll theme for nature enthusiasts and outdoor adventurers"
  spec.description   = "Nature Explorer is a Jekyll theme designed for outdoor enthusiasts, nature photographers, and adventure bloggers. Features a natural, earthy design with wilderness-inspired aesthetics."
  spec.homepage      = "https://github.com/natureexplorer/nature-explorer-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "sassc", "~> 2.1"
  spec.add_runtime_dependency "rouge", "~> 4.0"
  spec.add_runtime_dependency "kramdown", "~> 2.3"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "html-proofer", "~> 5.0"
  spec.add_development_dependency "rspec", "~> 3.0"

  spec.required_ruby_version = ">= 3.0"
end
