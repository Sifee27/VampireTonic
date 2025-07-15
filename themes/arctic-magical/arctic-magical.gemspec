# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "arctic-magical"
  spec.version       = "1.0.0"
  spec.authors       = ["Arctic Wizard"]
  spec.email         = ["wizard@arcticmagical.com"]

  spec.summary       = "A mystical Jekyll theme inspired by Arctic magic"
  spec.description   = "Arctic Magical is a beautiful Jekyll theme featuring aurora effects, snow animations, and crystalline design elements. Perfect for blogs, portfolios, and magical content."
  spec.homepage      = "https://github.com/arctic-magical/arctic-magical"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.4.1"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
