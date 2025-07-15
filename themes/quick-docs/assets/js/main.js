// QuickDocs Theme JavaScript
// Handles theme functionality including search, navigation, and interactions

class QuickDocs {
  constructor() {
    this.init();
  }

  init() {
    this.setupThemeToggle();
    this.setupMobileMenu();
    this.setupSearch();
    this.setupTOC();
    this.setupCodeBlocks();
    this.setupVersionSelector();
    this.setupSmoothScrolling();
    this.setupKeyboardNavigation();
  }

  // Theme Toggle
  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Update toggle icons based on current theme
    this.updateThemeToggleIcons();
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    this.updateThemeToggleIcons();
  }

  updateThemeToggleIcons() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const icons = document.querySelectorAll('.theme-toggle i');
    
    icons.forEach(icon => {
      icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
  }

  // Mobile Menu
  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileMenuToggle && sidebar) {
      mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mobileMenuOverlay.classList.toggle('open');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
      });
    }
    
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        mobileMenuOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // Search Functionality
  setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
      }
      
      searchTimeout = setTimeout(() => {
        this.performSearch(query, searchResults);
      }, 300);
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box')) {
        searchResults.style.display = 'none';
      }
    });
  }

  async performSearch(query, resultsContainer) {
    // Mock search implementation
    // In a real implementation, this would search through your documentation
    const mockResults = [
      {
        title: 'Getting Started',
        excerpt: 'Learn how to set up and configure your project...',
        url: '/docs/getting-started/',
        path: 'docs/getting-started.md'
      },
      {
        title: 'API Reference',
        excerpt: 'Complete API documentation with examples...',
        url: '/docs/api-reference/',
        path: 'docs/api-reference.md'
      },
      {
        title: 'Configuration',
        excerpt: 'Configure your application settings...',
        url: '/docs/configuration/',
        path: 'docs/configuration.md'
      }
    ];
    
    const filteredResults = mockResults.filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    this.displaySearchResults(filteredResults, resultsContainer);
  }

  displaySearchResults(results, container) {
    if (results.length === 0) {
      container.innerHTML = '<div class="no-results">No results found</div>';
    } else {
      container.innerHTML = results.map(result => `
        <a href="${result.url}" class="search-result">
          <div class="result-title">${result.title}</div>
          <div class="result-excerpt">${result.excerpt}</div>
          <div class="result-path">${result.path}</div>
        </a>
      `).join('');
    }
    
    container.style.display = 'block';
  }

  // Table of Contents
  setupTOC() {
    const tocContainer = document.getElementById('toc-list');
    const articleContent = document.querySelector('.article-content');
    
    if (!tocContainer || !articleContent) return;
    
    const headings = articleContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (headings.length === 0) {
      tocContainer.parentElement.style.display = 'none';
      return;
    }
    
    // Generate TOC
    const tocHTML = this.generateTOC(headings);
    tocContainer.innerHTML = tocHTML;
    
    // Add anchor links to headings
    this.addAnchorLinks(headings);
    
    // Setup scroll spy
    this.setupScrollSpy(headings);
  }

  generateTOC(headings) {
    let tocHTML = '<ul class="toc-list">';
    let currentLevel = 1;
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const id = heading.id || `heading-${index}`;
      const text = heading.textContent;
      
      if (!heading.id) {
        heading.id = id;
      }
      
      if (level > currentLevel) {
        tocHTML += '<ul class="toc-list">'.repeat(level - currentLevel);
      } else if (level < currentLevel) {
        tocHTML += '</ul>'.repeat(currentLevel - level);
      }
      
      tocHTML += `<li><a href="#${id}" class="toc-link">${text}</a></li>`;
      currentLevel = level;
    });
    
    tocHTML += '</ul>'.repeat(currentLevel);
    return tocHTML;
  }

  addAnchorLinks(headings) {
    headings.forEach(heading => {
      const anchor = document.createElement('a');
      anchor.href = `#${heading.id}`;
      anchor.className = 'anchor-link';
      anchor.innerHTML = '#';
      anchor.setAttribute('aria-label', `Link to ${heading.textContent}`);
      
      heading.appendChild(anchor);
    });
  }

  setupScrollSpy(headings) {
    const tocLinks = document.querySelectorAll('.toc-link');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const tocLink = document.querySelector(`.toc-link[href="#${id}"]`);
        
        if (tocLink) {
          if (entry.isIntersecting) {
            tocLinks.forEach(link => link.classList.remove('active'));
            tocLink.classList.add('active');
          }
        }
      });
    }, {
      rootMargin: '-100px 0px -70% 0px'
    });
    
    headings.forEach(heading => observer.observe(heading));
  }

  // Code Blocks
  setupCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
      const pre = block.parentElement;
      const language = this.getLanguageFromClass(block.className);
      
      // Create code block wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-enhanced';
      
      // Create header
      const header = document.createElement('div');
      header.className = 'code-header';
      header.innerHTML = `
        <span class="language-label">${language || 'code'}</span>
        <button class="copy-button" data-clipboard-target="#${this.generateId()}">
          <i class="fas fa-copy"></i>
          Copy
        </button>
      `;
      
      // Wrap the pre element
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
      
      // Add copy functionality
      const copyButton = header.querySelector('.copy-button');
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(block.textContent).then(() => {
          copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
          setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
          }, 2000);
        });
      });
    });
  }

  getLanguageFromClass(className) {
    const match = className.match(/language-(\w+)/);
    return match ? match[1] : null;
  }

  generateId() {
    return 'code-' + Math.random().toString(36).substr(2, 9);
  }

  // Version Selector
  setupVersionSelector() {
    const versionSelect = document.getElementById('version-select');
    
    if (versionSelect) {
      versionSelect.addEventListener('change', (e) => {
        const newPath = e.target.value;
        if (newPath) {
          window.location.href = newPath;
        }
      });
    }
  }

  // Smooth Scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Keyboard Navigation
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }
      
      // Escape to close search
      if (e.key === 'Escape') {
        const searchResults = document.getElementById('search-results');
        if (searchResults) {
          searchResults.style.display = 'none';
        }
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new QuickDocs();
});

// Utility functions
window.QuickDocsUtils = {
  // Debounce function for search
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Format date
  formatDate: function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },
  
  // Truncate text
  truncateText: function(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  }
};
