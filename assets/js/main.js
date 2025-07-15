// VampireTonic Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add floating animation to hero ornament
    const heroOrnament = document.querySelector('.hero-ornament');
    if (heroOrnament) {
        let floatDirection = 1;
        setInterval(() => {
            const currentTransform = heroOrnament.style.transform || 'translateY(0px)';
            const currentY = parseInt(currentTransform.match(/translateY\((-?\d+)px\)/)?.[1] || 0);
            
            if (currentY >= 10) floatDirection = -1;
            if (currentY <= -10) floatDirection = 1;
            
            heroOrnament.style.transform = `translateY(${currentY + floatDirection}px)`;
        }, 100);
    }

    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add hover effects to post cards
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.textContent === 'VampireTonic') {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});
