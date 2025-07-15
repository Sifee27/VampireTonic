# coding: utf-8
# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name = "vampire-tonic"
  spec.version = "0.1.0"
  spec.authors = ["VampireTonic"]
  spec.email = ["vampire@tonic.com"]

  spec.summary = "A dark, gothic Jekyll theme inspired by vampires"
  spec.homepage = "https://github.com/Sifee27/VampireTonic"
  spec.license = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml|404\.md)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.9.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_development_dependency "bundler"
end
