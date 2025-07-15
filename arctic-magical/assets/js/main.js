/**
 * Arctic Magical Theme JavaScript
 * Features: Aurora effects, snow animation, interactive elements
 */

// Configuration
const ARCTIC_CONFIG = {
  effects: {
    aurora: true,
    snow: true,
    particles: true,
    crystalTransitions: true
  },
  snow: {
    maxParticles: 50,
    fallSpeed: 1,
    windSpeed: 0.5
  },
  performance: {
    enableAnimations: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    throttleMs: 16
  }
};

// Utility functions
const utils = {
  // Throttle function for performance
  throttle: (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  },

  // Random number between min and max
  random: (min, max) => Math.random() * (max - min) + min,

  // Create element with classes
  createElement: (tag, classes = [], attributes = {}) => {
    const element = document.createElement(tag);
    classes.forEach(cls => element.classList.add(cls));
    Object.keys(attributes).forEach(attr => {
      element.setAttribute(attr, attributes[attr]);
    });
    return element;
  },

  // Performance monitoring
  measurePerformance: (name, fn) => {
    if (performance && performance.mark) {
      performance.mark(`${name}-start`);
      const result = fn();
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      return result;
    }
    return fn();
  }
};

// Snow Animation System
class SnowSystem {
  constructor() {
    this.particles = [];
    this.container = null;
    this.animationId = null;
    this.isRunning = false;
  }

  init() {
    if (!ARCTIC_CONFIG.effects.snow || !ARCTIC_CONFIG.performance.enableAnimations) return;

    this.container = document.querySelector('.snow-container');
    if (!this.container) return;

    this.createParticles();
    this.startAnimation();
  }

  createParticles() {
    const { maxParticles } = ARCTIC_CONFIG.snow;
    
    for (let i = 0; i < maxParticles; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = utils.createElement('div', ['snow-particle']);
    const symbols = ['❄', '❅', '❆', '⭐', '✦'];
    
    particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${utils.random(0, 100)}%`;
    particle.style.animationDuration = `${utils.random(3, 8)}s`;
    particle.style.animationDelay = `${utils.random(0, 5)}s`;
    particle.style.fontSize = `${utils.random(10, 20)}px`;
    particle.style.opacity = utils.random(0.3, 0.8);
    
    this.container.appendChild(particle);
    this.particles.push(particle);
  }

  startAnimation() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    const animate = () => {
      if (!this.isRunning) return;
      
      // Update particles occasionally
      if (Math.random() < 0.01) {
        this.updateRandomParticle();
      }
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  }

  updateRandomParticle() {
    const particle = this.particles[Math.floor(Math.random() * this.particles.length)];
    if (particle) {
      particle.style.left = `${utils.random(0, 100)}%`;
      particle.style.animationDuration = `${utils.random(3, 8)}s`;
    }
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Aurora Background System
class AuroraSystem {
  constructor() {
    this.element = null;
  }

  init() {
    if (!ARCTIC_CONFIG.effects.aurora || !ARCTIC_CONFIG.performance.enableAnimations) return;

    this.element = document.querySelector('.aurora-background');
    if (!this.element) return;

    this.setupAuroraAnimation();
  }

  setupAuroraAnimation() {
    // Aurora animation is handled by CSS, but we can add dynamic effects here
    const updateAurora = () => {
      if (!this.element) return;
      
      const intensity = 0.05 + Math.sin(Date.now() * 0.001) * 0.05;
      this.element.style.opacity = intensity;
    };

    // Update aurora intensity periodically
    setInterval(updateAurora, 2000);
  }
}

// Navigation System
class NavigationSystem {
  constructor() {
    this.navToggle = null;
    this.navMenu = null;
    this.isMenuOpen = false;
  }

  init() {
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    
    if (!this.navToggle || !this.navMenu) return;

    this.setupEventListeners();
  }

  setupEventListeners() {
    // Toggle menu on button click
    this.navToggle.addEventListener('click', () => {
      this.toggleMenu();
    });

    // Close menu on link click (mobile)
    this.navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          this.closeMenu();
        }
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !this.navToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Handle keyboard navigation
    this.navToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.navMenu.classList.toggle('active', this.isMenuOpen);
    this.navToggle.setAttribute('aria-expanded', this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.navMenu.classList.remove('active');
    this.navToggle.setAttribute('aria-expanded', 'false');
  }
}

// Interactive Elements System
class InteractiveSystem {
  constructor() {
    this.scrollIndicator = null;
  }

  init() {
    this.setupScrollIndicator();
    this.setupCopyButtons();
    this.setupTooltips();
    this.setupSmoothScrolling();
  }

  setupScrollIndicator() {
    // Create scroll progress indicator
    const indicator = utils.createElement('div', ['scroll-indicator']);
    const progress = utils.createElement('div', ['scroll-progress']);
    
    indicator.appendChild(progress);
    document.body.appendChild(indicator);
    
    this.scrollIndicator = progress;

    // Update on scroll
    const updateProgress = utils.throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      this.scrollIndicator.style.width = `${Math.min(scrollPercent, 100)}%`;
    }, ARCTIC_CONFIG.performance.throttleMs);

    window.addEventListener('scroll', updateProgress);
  }

  setupCopyButtons() {
    // Add copy buttons to code blocks
    document.querySelectorAll('.highlight').forEach(block => {
      const button = utils.createElement('button', ['copy-btn'], {
        'aria-label': 'Copy code to clipboard',
        'data-tooltip': 'Copy code'
      });
      button.textContent = 'Copy';
      
      button.addEventListener('click', () => {
        const code = block.querySelector('code') || block.querySelector('pre');
        if (code) {
          navigator.clipboard.writeText(code.textContent).then(() => {
            button.textContent = 'Copied!';
            button.classList.add('copied');
            setTimeout(() => {
              button.textContent = 'Copy';
              button.classList.remove('copied');
            }, 2000);
          });
        }
      });
      
      block.appendChild(button);
    });
  }

  setupTooltips() {
    // Initialize tooltips
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      element.classList.add('tooltip');
    });
  }

  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
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
  }
}

// Main Application Class
class ArcticMagicalApp {
  constructor() {
    this.systems = {
      snow: new SnowSystem(),
      aurora: new AuroraSystem(),
      navigation: new NavigationSystem(),
      interactive: new InteractiveSystem()
    };
  }

  init() {
    utils.measurePerformance('arctic-magical-init', () => {
      // Initialize all systems
      Object.values(this.systems).forEach(system => {
        try {
          system.init();
        } catch (error) {
          console.warn('Arctic Magical: System initialization failed:', error);
        }
      });
    });

    // Setup performance monitoring
    if (window.performance && window.performance.getEntriesByType) {
      setTimeout(() => {
        const measures = performance.getEntriesByType('measure');
        measures.forEach(measure => {
          if (measure.name.includes('arctic-magical')) {
            console.log(`Arctic Magical Performance: ${measure.name} took ${measure.duration}ms`);
          }
        });
      }, 1000);
    }
  }

  // Public API
  toggleSnow() {
    ARCTIC_CONFIG.effects.snow = !ARCTIC_CONFIG.effects.snow;
    if (ARCTIC_CONFIG.effects.snow) {
      this.systems.snow.init();
    } else {
      this.systems.snow.stop();
    }
  }

  toggleAurora() {
    ARCTIC_CONFIG.effects.aurora = !ARCTIC_CONFIG.effects.aurora;
    const aurora = document.querySelector('.aurora-background');
    if (aurora) {
      aurora.style.display = ARCTIC_CONFIG.effects.aurora ? 'block' : 'none';
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new ArcticMagicalApp();
  app.init();
  
  // Expose app to global scope for debugging
  window.ArcticMagical = app;
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when page is hidden
    ARCTIC_CONFIG.performance.enableAnimations = false;
  } else {
    // Resume animations when page is visible
    ARCTIC_CONFIG.performance.enableAnimations = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
});

// Handle reduced motion preference changes
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
  ARCTIC_CONFIG.performance.enableAnimations = !e.matches;
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ArcticMagicalApp;
}
