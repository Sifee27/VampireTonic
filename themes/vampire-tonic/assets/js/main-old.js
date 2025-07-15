// VampireTonic Theme JavaScript - Enhanced Gothic Experience
document.addEventListener('DOMContentLoaded', function() {
    // Create floating blood particles
    function createBloodParticle() {
        const particle = document.createElement('div');
        particle.className = 'blood-particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #DC143C, #8B0000);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${Math.random() * 100}vw;
            top: -10px;
            animation: bloodFall ${3 + Math.random() * 4}s linear forwards;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 7000);
    }
    
    // Create mystical fog effect
    function createMysticalFog() {
        const fog = document.createElement('div');
        fog.className = 'mystical-fog';
        fog.style.cssText = `
            position: fixed;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(139, 0, 0, 0.1), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: fogDrift ${15 + Math.random() * 10}s linear infinite;
        `;
        document.body.appendChild(fog);
        
        setTimeout(() => fog.remove(), 25000);
    }
    
    // Create floating bats
    function createBat() {
        const bat = document.createElement('div');
        bat.innerHTML = '🦇';
        bat.style.cssText = `
            position: fixed;
            font-size: ${1 + Math.random() * 1.5}rem;
            color: #8B0000;
            pointer-events: none;
            z-index: 999;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: batFlight ${8 + Math.random() * 12}s linear infinite;
            opacity: ${0.4 + Math.random() * 0.6};
        `;
        document.body.appendChild(bat);
        
        setTimeout(() => bat.remove(), 20000);
    }
    
    // Enhanced typing effect with blood dripping
    function typeWriterEffect(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                
                // Add blood drip effect on certain characters
                if (text.charAt(i) === 'V' || text.charAt(i) === 'T') {
                    createBloodDrip(element);
                }
                
                i++;
                setTimeout(type, speed + Math.random() * 50);
            }
        }
        
        type();
    }
    
    // Create blood drip effect
    function createBloodDrip(element) {
        const drip = document.createElement('div');
        drip.style.cssText = `
            position: absolute;
            width: 2px;
            height: 10px;
            background: linear-gradient(to bottom, #DC143C, #8B0000);
            left: ${Math.random() * element.offsetWidth}px;
            top: ${element.offsetHeight}px;
            animation: bloodDrip 2s ease-in forwards;
            z-index: 1001;
        `;
        element.style.position = 'relative';
        element.appendChild(drip);
        
        setTimeout(() => drip.remove(), 2000);
    }
    
    // Gothic cursor trail
    function createCursorTrail(e) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #DC143C, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: trailFade 1s ease-out forwards;
        `;
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bloodFall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes fogDrift {
            0% { transform: translateX(-200px) rotate(0deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100vw) rotate(360deg); opacity: 0; }
        }
        
        @keyframes batFlight {
            0% { transform: translateX(-100px) translateY(0) rotate(0deg); }
            25% { transform: translateX(25vw) translateY(-50px) rotate(10deg); }
            50% { transform: translateX(50vw) translateY(50px) rotate(-15deg); }
            75% { transform: translateX(75vw) translateY(-25px) rotate(8deg); }
            100% { transform: translateX(100vw) translateY(0) rotate(0deg); }
        }
        
        @keyframes bloodDrip {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(20px); opacity: 0; }
        }
        
        @keyframes trailFade {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.5); }
        }
        
        @keyframes pulseGlow {
            0%, 100% { text-shadow: 0 0 5px #DC143C; }
            50% { text-shadow: 0 0 20px #DC143C, 0 0 30px #8B0000; }
        }
        
        .gothic-glow {
            animation: pulseGlow 2s ease-in-out infinite;
        }
        
        body {
            cursor: none;
        }
        
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #DC143C;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        }
        
        .custom-cursor::after {
            content: '🗡';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 12px;
        }
    `;
    document.head.appendChild(style);
    
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Mouse movement effects
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        // Create cursor trail occasionally
        if (Math.random() < 0.1) {
            createCursorTrail(e);
        }
    });
    
    // Enhanced hover effects
    document.querySelectorAll('a, button, .btn').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            this.style.textShadow = '0 0 15px #DC143C';
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#FFD700';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.textShadow = 'none';
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#DC143C';
        });
    });
    
    // Enhanced heading effects
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.classList.add('gothic-glow');
            createBloodDrip(this);
        });
        
        heading.addEventListener('mouseleave', function() {
            this.classList.remove('gothic-glow');
        });
    });
    
    // Typing effect for main title - DISABLED TO FIX DISPLAY ISSUE
    // const mainTitle = document.querySelector('h1');
    // if (mainTitle && mainTitle.textContent.includes('VampireTonic')) {
    //     const text = mainTitle.textContent;
    //     setTimeout(() => typeWriterEffect(mainTitle, text, 150), 1000);
    // }
    
    // Periodic atmospheric effects
    setInterval(createBloodParticle, 2000);
    setInterval(createMysticalFog, 8000);
    setInterval(createBat, 5000);
    
    // Thunder effect on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                
                // Parallax effect for background
                document.body.style.backgroundPosition = `center ${rate}px`;
                
                // Create lightning effect occasionally
                if (Math.random() < 0.001) {
                    document.body.style.boxShadow = 'inset 0 0 100px rgba(255, 255, 255, 0.1)';
                    setTimeout(() => {
                        document.body.style.boxShadow = 'none';
                    }, 100);
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Sound effects (optional - requires user interaction)
    function playGothicSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    }
    
    // Add click sound to buttons
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function() {
            try {
                playGothicSound();
            } catch (e) {
                // Silently fail if audio context is not available
            }
        });
    });
    
    // Page load effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 2s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    // Console message for developers
    console.log(`
    🦇 Welcome to VampireTonic 🦇
    
    "In the depths of darkness, code finds its truest form."
    
    Theme created with dark passion and gothic elegance.
    May your code be as immortal as the night itself.
    
    🌙 Embrace the darkness... 🌙
    `);
});
