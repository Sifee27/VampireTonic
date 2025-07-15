---
layout: default
---

<main class="homepage">
  {% include purple-effects.html %}
  
  <section class="hero">
    <div class="hero-background"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">[Your Main Headline]</h1>
        <p class="hero-subtitle">[Your value proposition or tagline that explains what you do and for whom]</p>
        <div class="hero-actions">
          <a href="/contact/" class="btn btn-primary">Start Your Project</a>
          <a href="/portfolio/" class="btn btn-secondary">View Our Work</a>
        </div>
      </div>
    </div>
  </section>
  
  <section class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2>[Portfolio Section Title]</h2>
        <p>[Brief description of your work and what visitors can expect to see]</p>
      </div>
      
      <div class="portfolio-filter">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="[category-1]">[Category 1]</button>
        <button class="filter-btn" data-filter="[category-2]">[Category 2]</button>
        <button class="filter-btn" data-filter="[category-3]">[Category 3]</button>
      </div>
      
      <div class="portfolio-grid">
        <div class="portfolio-item" data-category="[category-1]">
          <div class="portfolio-image">
            <img src="[your-project-image-url]" alt="[Project Name]">
            <div class="portfolio-overlay">
              <h3>[Project Title]</h3>
              <p>[Brief project description]</p>
              <a href="[project-url]" class="btn btn-small">View Project</a>
            </div>
          </div>
        </div>
        
        <div class="portfolio-item" data-category="[category-2]">
          <div class="portfolio-image">
            <img src="[your-project-image-url]" alt="[Project Name]">
            <div class="portfolio-overlay">
              <h3>[Project Title]</h3>
              <p>[Brief project description]</p>
              <a href="[project-url]" class="btn btn-small">View Project</a>
            </div>
          </div>
        </div>
        
        <div class="portfolio-item" data-category="[category-3]">
          <div class="portfolio-image">
            <img src="[your-project-image-url]" alt="[Project Name]">
            <div class="portfolio-overlay">
              <h3>[Project Title]</h3>
              <p>[Brief project description]</p>
              <a href="[project-url]" class="btn btn-small">View Project</a>
            </div>
          </div>
        </div>
        
        <div class="portfolio-item" data-category="[category-1]">
          <div class="portfolio-image">
            <img src="[your-project-image-url]" alt="[Project Name]">
            <div class="portfolio-overlay">
              <h3>[Project Title]</h3>
              <p>[Brief project description]</p>
              <a href="[project-url]" class="btn btn-small">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2>[Services Section Title]</h2>
        <p>[Brief description of your services and how they help clients]</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-[your-icon]"></i>
          </div>
          <h3>[Service Name 1]</h3>
          <p>[Brief description of what this service includes and how it benefits clients]</p>
          <ul>
            <li>[Key feature 1]</li>
            <li>[Key feature 2]</li>
            <li>[Key feature 3]</li>
            <li>[Key feature 4]</li>
          </ul>
          <a href="/services/[service-url]/" class="btn btn-outline">Learn More</a>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-[your-icon]"></i>
          </div>
          <h3>[Service Name 2]</h3>
          <p>[Brief description of what this service includes and how it benefits clients]</p>
          <ul>
            <li>[Key feature 1]</li>
            <li>[Key feature 2]</li>
            <li>[Key feature 3]</li>
            <li>[Key feature 4]</li>
          </ul>
          <a href="/services/[service-url]/" class="btn btn-outline">Learn More</a>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-[your-icon]"></i>
          </div>
          <h3>[Service Name 3]</h3>
          <p>[Brief description of what this service includes and how it benefits clients]</p>
          <ul>
            <li>[Key feature 1]</li>
            <li>[Key feature 2]</li>
            <li>[Key feature 3]</li>
            <li>[Key feature 4]</li>
          </ul>
          <a href="/services/[service-url]/" class="btn btn-outline">Learn More</a>
        </div>
        
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-[your-icon]"></i>
          </div>
          <h3>[Service Name 4]</h3>
          <p>[Brief description of what this service includes and how it benefits clients]</p>
          <ul>
            <li>[Key feature 1]</li>
            <li>[Key feature 2]</li>
            <li>[Key feature 3]</li>
            <li>[Key feature 4]</li>
          </ul>
          <a href="/services/[service-url]/" class="btn btn-outline">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number counter" data-target="[your-number]">0</div>
          <div class="stat-label">[Your Metric 1]</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-number counter" data-target="[your-number]">0</div>
          <div class="stat-label">[Your Metric 2]</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-number counter" data-target="[your-number]">0</div>
          <div class="stat-label">[Your Metric 3]</div>
        </div>
        
        <div class="stat-item">
          <div class="stat-number counter" data-target="[your-number]">0</div>
          <div class="stat-label">[Your Metric 4]</div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>[Testimonials Section Title]</h2>
        <p>[Brief message about client satisfaction and social proof]</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"[Client testimonial quote about your work and service]"</p>
          </div>
          <div class="testimonial-author">
            <img src="[client-photo-url]" alt="[Client Name]">
            <div class="author-info">
              <h4>[Client Name]</h4>
              <span>[Client Title], [Company Name]</span>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"[Client testimonial quote about your work and service]"</p>
          </div>
          <div class="testimonial-author">
            <img src="[client-photo-url]" alt="[Client Name]">
            <div class="author-info">
              <h4>[Client Name]</h4>
              <span>[Client Title], [Company Name]</span>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"[Client testimonial quote about your work and service]"</p>
          </div>
          <div class="testimonial-author">
            <img src="[client-photo-url]" alt="[Client Name]">
            <div class="author-info">
              <h4>[Client Name]</h4>
              <span>[Client Title], [Company Name]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="blog-section">
    <div class="container">
      <div class="section-header">
        <h2>[Blog Section Title]</h2>
        <p>[Brief description of your blog content and what visitors can expect]</p>
      </div>
      
      <div class="blog-grid">
        <article class="blog-post">
          <div class="post-image">
            <img src="[blog-post-image-url]" alt="[Blog Post Title]">
          </div>
          <div class="post-content">
            <div class="post-meta">
              <time>[Post Date]</time>
              <span>[Category]</span>
            </div>
            <h3><a href="[post-url]">[Blog Post Title]</a></h3>
            <p>[Brief excerpt or summary of the blog post content]</p>
            <a href="[post-url]" class="read-more">Read More</a>
          </div>
        </article>
        
        <article class="blog-post">
          <div class="post-image">
            <img src="[blog-post-image-url]" alt="[Blog Post Title]">
          </div>
          <div class="post-content">
            <div class="post-meta">
              <time>[Post Date]</time>
              <span>[Category]</span>
            </div>
            <h3><a href="[post-url]">[Blog Post Title]</a></h3>
            <p>[Brief excerpt or summary of the blog post content]</p>
            <a href="[post-url]" class="read-more">Read More</a>
          </div>
        </article>
        
        <article class="blog-post">
          <div class="post-image">
            <img src="[blog-post-image-url]" alt="[Blog Post Title]">
          </div>
          <div class="post-content">
            <div class="post-meta">
              <time>[Post Date]</time>
              <span>[Category]</span>
            </div>
            <h3><a href="[post-url]">[Blog Post Title]</a></h3>
            <p>[Brief excerpt or summary of the blog post content]</p>
            <a href="[post-url]" class="read-more">Read More</a>
          </div>
        </article>
      </div>
    </div>
  </section>
  
  <section class="newsletter-section">
    <div class="container">
      <div class="newsletter-content">
        <h2>[Newsletter Section Title]</h2>
        <p>[Your newsletter value proposition - what subscribers will get and why they should sign up]</p>
        
        <form class="newsletter-form" action="#" method="post">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit">Subscribe</button>
        </form>
        
        <p class="newsletter-note">[Your privacy message and unsubscribe policy]</p>
      </div>
    </div>
  </section>
</main>
