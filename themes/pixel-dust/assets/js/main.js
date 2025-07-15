// PixelDust Main JavaScript
// Retro pixel theme effects and interactions

class PixelDust {
  constructor() {
    this.init();
  }

  init() {
    this.setupParticles();
    this.setupMatrixEffect();
    this.setupScanLine();
    this.setupPixelCursor();
    this.setupGlitchEffect();
    this.setupHoverEffects();
    this.setupMobileMenu();
    this.setupPortfolioLightbox();
    this.setupCodeCopy();
    this.setupSmoothScrolling();
    this.setupTypingEffect();
    this.setupPixelAnimations();
  }

  // Particle system
  setupParticles() {
    const particleSystem = document.createElement('div');
    particleSystem.className = 'particle-system';
    document.body.appendChild(particleSystem);

    const colors = ['#00ff41', '#ff6b35', '#ff0080'];
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particleSystem.appendChild(particle);
    }
  }

  // Matrix rain effect
  setupMatrixEffect() {
    const matrixEffect = document.createElement('div');
    matrixEffect.className = 'matrix-effect';
    document.body.appendChild(matrixEffect);

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    for (let i = 0; i < 20; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = Math.random() * 100 + '%';
      column.style.animationDelay = Math.random() * 15 + 's';
      
      let columnText = '';
      for (let j = 0; j < 30; j++) {
        columnText += chars[Math.floor(Math.random() * chars.length)] + '\n';
      }
      column.textContent = columnText;
      
      matrixEffect.appendChild(column);
    }
  }

  // Scan line effect
  setupScanLine() {
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.body.appendChild(scanLine);
  }

  // Custom pixel cursor
  setupPixelCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    document.body.classList.add('pixel-cursor');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor movement
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Cursor hover effects
    document.querySelectorAll('a, button, .pixel-btn, .portfolio-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
      });
    });
  }

  // Glitch effect for titles
  setupGlitchEffect() {
    document.querySelectorAll('h1, h2, .hero-title').forEach(el => {
      const text = el.textContent;
      el.setAttribute('data-text', text);
      el.classList.add('glitch');
      
      // Random glitch activation
      setInterval(() => {
        if (Math.random() < 0.1) {
          el.style.animation = 'glitch 0.3s ease-in-out';
          setTimeout(() => {
            el.style.animation = '';
          }, 300);
        }
      }, 2000);
    });
  }

  // Hover effects
  setupHoverEffects() {
    document.querySelectorAll('.pixel-card, .portfolio-item, .post-item').forEach(el => {
      el.classList.add('hover-effect');
      
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '';
      });
    });
  }

  // Mobile menu
  setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.site-nav');
    
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.innerHTML = nav.classList.contains('active') ? '✗' : '☰';
      });
    }
  }

  // Portfolio lightbox
  setupPortfolioLightbox() {
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    
    portfolioItems.forEach(img => {
      img.addEventListener('click', (e) => {
        e.preventDefault();
        this.openLightbox(img.src, img.alt);
      });
    });
  }

  openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'pixel-modal active';
    
    lightbox.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">${alt}</h3>
          <button class="modal-close">✗</button>
        </div>
        <div class="modal-body">
          <img src="${src}" alt="${alt}" class="pixel-art" style="max-width: 100%; height: auto;">
        </div>
      </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox
    lightbox.querySelector('.modal-close').addEventListener('click', () => {
      lightbox.remove();
    });
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });
  }

  // Code copy functionality
  setupCodeCopy() {
    document.querySelectorAll('.highlight').forEach(codeBlock => {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block';
      codeBlock.parentNode.insertBefore(wrapper, codeBlock);
      wrapper.appendChild(codeBlock);
      
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-button';
      copyBtn.textContent = 'COPY';
      wrapper.appendChild(copyBtn);
      
      copyBtn.addEventListener('click', () => {
        const code = codeBlock.textContent;
        navigator.clipboard.writeText(code).then(() => {
          copyBtn.textContent = 'COPIED!';
          copyBtn.classList.add('copied');
          
          setTimeout(() => {
            copyBtn.textContent = 'COPY';
            copyBtn.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  // Smooth scrolling
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
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

  // Typing effect for hero text
  setupTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      const text = heroSubtitle.textContent;
      heroSubtitle.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroSubtitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        } else {
          // Add blinking cursor
          heroSubtitle.innerHTML += '<span class="cursor-blink">|</span>';
        }
      };
      
      setTimeout(typeWriter, 1000);
    }
  }

  // Pixel animations on scroll
  setupPixelAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pixel-animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.pixel-card, .portfolio-item, .post-item').forEach(el => {
      observer.observe(el);
    });
  }

  // Pixel progress bar animation
  animateProgressBar(element, targetWidth) {
    let width = 0;
    const increment = targetWidth / 100;
    
    const animate = () => {
      if (width < targetWidth) {
        width += increment;
        element.style.width = width + '%';
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }

  // Create sprite animation
  createSpriteAnimation(element, sprites, duration = 1000) {
    let currentSprite = 0;
    
    const animate = () => {
      element.style.backgroundImage = `url(${sprites[currentSprite]})`;
      currentSprite = (currentSprite + 1) % sprites.length;
    };
    
    setInterval(animate, duration / sprites.length);
  }

  // Pixel shake effect
  pixelShake(element, duration = 500) {
    const originalTransform = element.style.transform;
    element.style.animation = `pixel-shake ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.animation = '';
      element.style.transform = originalTransform;
    }, duration);
  }

  // Matrix digital rain
  digitalRain(container) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    const columns = Math.floor(container.offsetWidth / 20);
    
    for (let i = 0; i < columns; i++) {
      const drop = document.createElement('div');
      drop.className = 'matrix-drop';
      drop.style.left = i * 20 + 'px';
      drop.style.animationDelay = Math.random() * 2 + 's';
      drop.textContent = chars[Math.floor(Math.random() * chars.length)];
      container.appendChild(drop);
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new PixelDust();
});

// CSS for additional animations
const style = document.createElement('style');
style.textContent = `
  .cursor-blink {
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  .pixel-animate {
    animation: pixel-fade-in 0.6s ease-out;
  }
  
  @keyframes pixel-fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .matrix-drop {
    position: absolute;
    color: #00ff41;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    animation: matrix-fall 3s linear infinite;
  }
  
  @keyframes matrix-fall {
    0% {
      transform: translateY(-100vh);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Export for use in other scripts
window.PixelDust = PixelDust;
