// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            this.innerHTML = mobileNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
});
// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    // Create dots if they exist in HTML
    if (slides.length > 0) {
        // Function to show slide
        function showSlide(n) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove active from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Calculate new slide index
            currentSlide = (n + slides.length) % slides.length;
            
            // Show current slide
            slides[currentSlide].classList.add('active');
            
            // Activate current dot
            if (dots.length > 0) {
                dots[currentSlide].classList.add('active');
            }
        }
        
        // Next/Previous buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
        }
        
        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto-advance every 5 seconds
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
        
        // Initialize first slide
        showSlide(0);
    }
});
// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Close all other items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.classList.remove('open');
                }
            });
            
            // Toggle current item
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.classList.add('open');
            } else {
                answer.classList.remove('open');
            }
        });
    });
});
// Enhanced Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            body.classList.toggle('menu-open');
            this.setAttribute('aria-expanded', mobileNav.classList.contains('active'));
        });
        
        // Close menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                body.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileToggle.contains(event.target) && 
                !mobileNav.contains(event.target) && 
                mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                body.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
// Add loading class for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading');
            img.addEventListener('load', function() {
                this.classList.remove('loading');
            });
        }
    });
    
    // Add current year to footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
// Set active navigation link
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-menu a, .mobile-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // Also highlight home if on index
        if (currentPage === 'index.html' || currentPage === '') {
            if (link.getAttribute('href') === 'index.html') {
                link.classList.add('active');
            }
        }
    });
});
