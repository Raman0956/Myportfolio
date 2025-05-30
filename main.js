// Main JavaScript for Ramandeep Kaur's Portfolio

// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Set current year in footer
    document.getElementById('year').innerHTML = new Date().getFullYear();
    
    // Navbar scroll class
    const header = document.querySelector('#header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('navbar-scrolled');
            header.querySelector('.navbar').classList.add('py-2');
            header.querySelector('.navbar').classList.remove('py-3');
        } else {
            header.classList.remove('navbar-scrolled');
            header.querySelector('.navbar').classList.add('py-3');
            header.querySelector('.navbar').classList.remove('py-2');
        }
        
        // Highlight active nav item based on scroll position
        const scrollPosition = window.scrollY + 200;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('nameInput').value;
            const email = document.getElementById('emailInput').value;
            const subject = document.getElementById('subjectInput').value;
            const message = document.getElementById('messageInput').value;
            
            // Here you would normally send the data to a server
            // Since this is a static HTML site, we'll just simulate success with an alert
            
            // Display success message (you can replace this with a better UI notification)
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Mobile nav toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close mobile nav when clicking on a nav item
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});