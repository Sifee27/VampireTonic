// VampireTonic Theme JavaScript - Optimized and Clean
(function() {
    'use strict';
    
    // Utility functions
    const utils = {
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
        
        throttle: function(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    };
    
    // DOM ready function
    function domReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without causing jump
                    if (history.pushState) {
                        history.pushState(null, null, `#${targetId}`);
                    }
                }
            });
        });
    }
    
    // Enhanced navigation interactions
    function initNavigation() {
        const navLinks = document.querySelectorAll('.page-link, .nav-menu a');
        const navToggle = document.querySelector('.nav-trigger');
        const navMenu = document.querySelector('.trigger');
        
        // Add keyboard navigation support
        navLinks.forEach(link => {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('change', function() {
                navMenu.style.display = this.checked ? 'flex' : 'none';
                
                // Update ARIA attributes
                navToggle.setAttribute('aria-expanded', this.checked);
                navMenu.setAttribute('aria-hidden', !this.checked);
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navToggle.checked = false;
                    navMenu.style.display = 'none';
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                }
            });
        }
    }
    
    // Optimize scroll effects with throttling
    function initScrollEffects() {
        const header = document.querySelector('.site-header, .fixed-header');
        let lastScrollY = window.scrollY;
        
        const handleScroll = utils.throttle(() => {
            const currentScrollY = window.scrollY;
            
            // Add scroll direction class
            if (currentScrollY > lastScrollY) {
                document.body.classList.add('scroll-down');
                document.body.classList.remove('scroll-up');
            } else {
                document.body.classList.add('scroll-up');
                document.body.classList.remove('scroll-down');
            }
            
            // Header opacity effect
            if (header) {
                const opacity = Math.max(0.8, 1 - (currentScrollY / 200));
                header.style.backgroundColor = `rgba(47, 27, 20, ${opacity})`;
            }
            
            lastScrollY = currentScrollY;
        }, 16); // ~60fps
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    // Enhanced post card interactions
    function initPostCards() {
        const postCards = document.querySelectorAll('.post-card');
        
        postCards.forEach(card => {
            let isHovered = false;
            
            card.addEventListener('mouseenter', function() {
                if (!isHovered) {
                    isHovered = true;
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (isHovered) {
                    isHovered = false;
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
            
            // Keyboard support
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    const link = this.querySelector('a');
                    if (link) {
                        e.preventDefault();
                        link.click();
                    }
                }
            });
        });
    }
    
    // Code block enhancements
    function initCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(block => {
            // Add copy button
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-code-btn';
            copyButton.textContent = 'Copy';
            copyButton.setAttribute('aria-label', 'Copy code to clipboard');
            
            copyButton.addEventListener('click', async function() {
                try {
                    await navigator.clipboard.writeText(block.textContent);
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Copy';
                    }, 2000);
                } catch (err) {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = block.textContent;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Copy';
                    }, 2000);
                }
            });
            
            block.parentNode.style.position = 'relative';
            block.parentNode.appendChild(copyButton);
        });
    }
    
    // Performance monitoring
    function initPerformanceMonitoring() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('VampireTonic Performance:', {
                            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                            totalTime: perfData.loadEventEnd - perfData.fetchStart
                        });
                    }
                }, 0);
            });
        }
    }
    
    // Initialize all components
    domReady(function() {
        initSmoothScrolling();
        initNavigation();
        initScrollEffects();
        initPostCards();
        initCodeBlocks();
        initPerformanceMonitoring();
        
        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
        
        console.log('VampireTonic theme loaded successfully');
    });
    
})();
