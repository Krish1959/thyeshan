// Navigation function
function navigateTo(page) {
    // Add fade out effect
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = page;
    }, 300);
}

// Fade in effect on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    // Preload images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadImg = new Image();
            preloadImg.src = src;
        }
    });

    // Add hover effects to buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        btn.addEventListener('mouseleave', () => {
            if (!btn.classList.contains('active')) {
                btn.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        navigateTo('index.html');
    } else if (e.key === '2') {
        navigateTo('page2.html');
    } else if (e.key === '3') {
        navigateTo('page3.html');
    }
});

// Add parallax effect on mouse move (Page 1)
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    document.addEventListener('mousemove', (e) => {
        const logo = document.querySelector('.company-logo');
        if (logo) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            logo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
}