// ZinePress JavaScript - Indie Web Aesthetic
// Enhancing the reading experience with subtle interactions

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reading progress indicator
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
  document.body.appendChild(progressBar);
  
  const progressFill = progressBar.querySelector('.reading-progress-fill');
  
  function updateReadingProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const trackLength = documentHeight - windowHeight;
    const pctScrolled = Math.floor(scrollTop / trackLength * 100);
    
    progressFill.style.width = pctScrolled + '%';
  }
  
  window.addEventListener('scroll', updateReadingProgress);
  updateReadingProgress();

  // Lazy loading for images
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll('.copy-button');
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        navigator.clipboard.writeText(targetElement.textContent).then(() => {
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          setTimeout(() => {
            this.textContent = originalText;
          }, 2000);
        });
      }
    });
  });

  // Search functionality
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        // Simple client-side search (can be enhanced with search service)
        performSearch(query);
      }
    });
  }

  function performSearch(query) {
    // This is a simple implementation - in production, you'd want to use
    // a proper search service like Algolia, Lunr.js, or server-side search
    const searchResults = [];
    const content = document.querySelectorAll('.post-content, .page-content');
    
    content.forEach(element => {
      const text = element.textContent.toLowerCase();
      if (text.includes(query.toLowerCase())) {
        const post = element.closest('.post, .page');
        if (post) {
          const title = post.querySelector('h1, h2, .post-title, .page-title');
          if (title) {
            searchResults.push({
              title: title.textContent,
              url: post.querySelector('a[href]')?.href || window.location.href,
              excerpt: getExcerpt(text, query.toLowerCase())
            });
          }
        }
      }
    });
    
    displaySearchResults(searchResults, query);
  }

  function getExcerpt(text, query) {
    const index = text.indexOf(query);
    const start = Math.max(0, index - 100);
    const end = Math.min(text.length, index + query.length + 100);
    return text.substring(start, end) + '...';
  }

  function displaySearchResults(results, query) {
    // Create or update search results display
    let resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) {
      resultsContainer = document.createElement('div');
      resultsContainer.className = 'search-results';
      searchForm.parentNode.insertBefore(resultsContainer, searchForm.nextSibling);
    }
    
    if (results.length === 0) {
      resultsContainer.innerHTML = `<p>No results found for "${query}"</p>`;
    } else {
      resultsContainer.innerHTML = `
        <h3>Search Results for "${query}"</h3>
        <ul>
          ${results.map(result => `
            <li>
              <a href="${result.url}">${result.title}</a>
              <p>${result.excerpt}</p>
            </li>
          `).join('')}
        </ul>
      `;
    }
  }

  // Newsletter form enhancement
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      // Basic email validation
      if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate subscription process
      // In production, this would connect to your email service
      showMessage('Thank you for subscribing!', 'success');
      this.reset();
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Insert after the form
    const form = document.querySelector('.newsletter-form');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
    
    // Remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  }

  // Submission form enhancement
  const submissionForm = document.querySelector('.submission-form form');
  if (submissionForm) {
    submissionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        } else {
          field.classList.remove('error');
        }
      });
      
      if (!isValid) {
        showMessage('Please fill in all required fields.', 'error');
        return;
      }
      
      // Simulate form submission
      showMessage('Thank you for your submission! We\'ll be in touch soon.', 'success');
      this.reset();
    });
  }

  // Accessibility improvements
  // Add focus indicators for keyboard navigation
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.classList.add('focused');
    });
    
    element.addEventListener('blur', function() {
      this.classList.remove('focused');
    });
  });

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    // Remove or modify animations for users who prefer reduced motion
    document.documentElement.classList.add('reduce-motion');
  }

  // Dark mode support (if implemented)
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark-mode'));
    });
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      document.documentElement.classList.add('dark-mode');
    }
  }

  // Performance monitoring
  if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          // Log page load time for optimization
          console.log(`Page loaded in ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
      }
    });
    
    perfObserver.observe({ entryTypes: ['navigation'] });
  }

  console.log('ZinePress initialized - Welcome to the indie web!');
});

// Add CSS for reading progress and messages
const style = document.createElement('style');
style.textContent = `
  .reading-progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(56, 178, 172, 0.1);
    z-index: 1000;
  }
  
  .reading-progress-fill {
    height: 100%;
    background: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  .message {
    padding: var(--spacing-md);
    margin: var(--spacing-md) 0;
    border-radius: var(--border-radius);
    font-weight: 600;
  }
  
  .message-success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  .message-error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  
  .search-results {
    margin-top: var(--spacing-lg);
    padding: var(--spacing-lg);
    background: var(--paper-color);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
  }
  
  .search-results ul {
    list-style: none;
    padding: 0;
  }
  
  .search-results li {
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
  }
  
  .search-results li:last-child {
    border-bottom: none;
  }
  
  .focused {
    outline: 2px solid var(--accent-color) !important;
    outline-offset: 2px !important;
  }
  
  .reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .error {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
  }
`;
document.head.appendChild(style);
