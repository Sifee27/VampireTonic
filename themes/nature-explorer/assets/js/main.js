// Nature Explorer Theme - Main JavaScript
// Interactive features and enhancements

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    initializeScrollEffects();
    initializeWeatherWidget();
    initializeImageLightbox();
    initializeFormEnhancements();
    initializePerformanceOptimizations();
  });

  // Navigation functionality
  function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
          if (navToggle.classList.contains('active')) {
            switch(index) {
              case 0:
                span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                break;
              case 1:
                span.style.opacity = '0';
                break;
              case 2:
                span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                break;
            }
          } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
          }
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          
          // Reset hamburger menu
          const spans = navToggle.querySelectorAll('span');
          spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
          });
        }
      });
    }
  }

  // Search functionality
  function initializeSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('.search-form');
    
    if (searchToggle && searchOverlay) {
      searchToggle.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus search input after animation
        setTimeout(() => {
          if (searchInput) searchInput.focus();
        }, 300);
      });
      
      if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
      }
      
      // Close search with Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
          closeSearch();
        }
      });
      
      // Close search when clicking overlay
      searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
          closeSearch();
        }
      });
      
      // Handle search form submission
      if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const query = searchInput.value.trim();
          if (query) {
            // In a real implementation, you would integrate with your search system
            console.log('Searching for:', query);
            alert('Search functionality would be implemented here. Query: ' + query);
          }
        });
      }
    }
    
    function closeSearch() {
      searchOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (searchInput) searchInput.value = '';
    }
  }

  // Scroll effects
  function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
      const scrolled = window.pageYOffset;
      const header = document.querySelector('.site-header');
      
      // Add/remove scrolled class to header
      if (header) {
        if (scrolled > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      
      // Parallax effect for hero section
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroOffset = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrolled >= heroOffset - window.innerHeight && scrolled <= heroOffset + heroHeight) {
          const rate = (scrolled - heroOffset) / heroHeight;
          heroSection.style.transform = `translateY(${rate * 50}px)`;
        }
      }
      
      // Fade in animations for elements
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(element => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrolled + windowHeight > elementTop + elementHeight / 4) {
          element.classList.add('visible');
        }
      });
      
      ticking = false;
    }
    
    function requestScrollUpdate() {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
    updateScrollEffects(); // Initial call
  }

  // Weather widget simulation
  function initializeWeatherWidget() {
    const weatherWidget = document.querySelector('.weather-widget .weather-temp');
    const weatherInfo = document.querySelector('.weather-info span');
    
    if (weatherWidget || weatherInfo) {
      // Simulate weather data (in a real app, you'd fetch from an API)
      const weatherConditions = [
        { temp: '72°F', condition: 'Perfect for hiking!' },
        { temp: '68°F', condition: 'Great weather for outdoor activities!' },
        { temp: '75°F', condition: 'Ideal conditions for nature photography!' },
        { temp: '70°F', condition: 'Excellent day for trail exploration!' }
      ];
      
      const currentWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      
      if (weatherWidget) {
        weatherWidget.textContent = currentWeather.temp;
      }
      
      if (weatherInfo) {
        weatherInfo.textContent = 'Current conditions: ' + currentWeather.condition;
      }
    }
  }

  // Image lightbox functionality
  function initializeImageLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-item img, .post-image img');
    
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        createLightbox(this);
      });
      
      // Add cursor pointer to indicate clickable
      img.style.cursor = 'pointer';
    });
    
    function createLightbox(image) {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="${image.src}" alt="${image.alt}">
          <button class="lightbox-close">&times;</button>
        </div>
      `;
      
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';
      
      // Close lightbox functionality
      const closeBtn = lightbox.querySelector('.lightbox-close');
      closeBtn.addEventListener('click', closeLightbox);
      
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
      
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeLightbox();
        }
      });
      
      function closeLightbox() {
        lightbox.remove();
        document.body.style.overflow = '';
      }
      
      // Animate lightbox appearance
      setTimeout(() => {
        lightbox.style.opacity = '1';
      }, 10);
    }
  }

  // Form enhancements
  function initializeFormEnhancements() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button');
        
        if (email && isValidEmail(email)) {
          // Simulate form submission
          button.textContent = 'Subscribing...';
          button.disabled = true;
          
          setTimeout(() => {
            button.textContent = 'Subscribed!';
            button.style.background = '#28a745';
            
            setTimeout(() => {
              button.textContent = 'Subscribe';
              button.disabled = false;
              button.style.background = '';
              this.querySelector('input[type="email"]').value = '';
            }, 2000);
          }, 1000);
        } else {
          showToast('Please enter a valid email address', 'error');
        }
      });
    });
  }

  // Performance optimizations
  function initializePerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => {
        imageObserver.observe(img);
      });
    }
    
    // Throttle scroll and resize events
    let scrollTimeout;
    let resizeTimeout;
    
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        // Scroll-based optimizations
        updateVisibleElements();
      }, 16); // ~60fps
    });
    
    window.addEventListener('resize', () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(() => {
        // Resize-based optimizations
        updateLayoutCalculations();
      }, 250);
    });
  }

  // Utility functions
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

  function updateVisibleElements() {
    // Update animations for visible elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        element.classList.add('animated');
      }
    });
  }

  function updateLayoutCalculations() {
    // Recalculate layout-dependent features
    const masonry = document.querySelector('.masonry-grid');
    if (masonry) {
      // Recalculate masonry layout
      repositionMasonryItems();
    }
  }

  function repositionMasonryItems() {
    // Masonry layout repositioning logic
    const container = document.querySelector('.masonry-grid');
    if (!container) return;
    
    const items = container.querySelectorAll('.masonry-item');
    const gap = 20;
    const columnWidth = 300;
    const containerWidth = container.offsetWidth;
    const columns = Math.floor(containerWidth / (columnWidth + gap));
    
    const columnHeights = new Array(columns).fill(0);
    
    items.forEach(item => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      const x = shortestColumn * (columnWidth + gap);
      const y = columnHeights[shortestColumn];
      
      item.style.position = 'absolute';
      item.style.left = x + 'px';
      item.style.top = y + 'px';
      item.style.width = columnWidth + 'px';
      
      columnHeights[shortestColumn] += item.offsetHeight + gap;
    });
    
    container.style.height = Math.max(...columnHeights) + 'px';
  }

  // CSS animations and styles for JavaScript features
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    .site-header.scrolled {
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      background: rgba(45, 80, 22, 0.95);
      backdrop-filter: blur(10px);
    }
    
    .fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    
    .lightbox-content img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: -40px;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      padding: 10px;
      line-height: 1;
    }
    
    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 5px;
      color: white;
      font-weight: 600;
      z-index: 9999;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }
    
    .toast.show {
      transform: translateX(0);
    }
    
    .toast-info {
      background: #17a2b8;
    }
    
    .toast-success {
      background: #28a745;
    }
    
    .toast-error {
      background: #dc3545;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    img.lazy {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    img.lazy.loaded {
      opacity: 1;
    }
    
    @media (prefers-reduced-motion: reduce) {
      .fade-in,
      .animate-on-scroll,
      .toast,
      .lightbox {
        transition: none !important;
      }
    }
  `;
  
  document.head.appendChild(styleSheet);

})();
