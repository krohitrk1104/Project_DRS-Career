
        // Page Navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
                window.scrollTo(0, 0);
            }
            
            // Update active nav link
            updateActiveNavLink(pageId);
            
            // Close mobile menu if open
            closeMobileMenu();
        }

        function updateActiveNavLink(pageId) {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.textContent.toLowerCase().includes(pageId.replace('-', ' '))) {
                    link.classList.add('active');
                }
            });
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.style.display === 'flex') {
                closeMobileMenu();
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            }
        }

        function closeMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            showToast('Message sent successfully! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });

        // Toast Notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Loading Screen
        window.addEventListener('load', function() {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        // Smooth Scroll for Internal Links
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

        // Add hover effects to input fields
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--primary-color)';
                this.style.boxShadow = '0 0 0 3px rgba(74, 0, 224, 0.1)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = '#e0e0e0';
                this.style.boxShadow = 'none';
            });
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.about-card, .partner-card, .workshop-card, .tour-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        // Dynamic Workshop Registration
        document.querySelectorAll('.workshop-card').forEach(card => {
            card.addEventListener('click', function() {
                const workshopTitle = this.querySelector('h3').textContent;
                showToast(`Registration opened for ${workshopTitle}`);
            });
        });

        // Partner Card Interactions
        document.querySelectorAll('.partner-card').forEach(card => {
            card.addEventListener('click', function() {
                const partnerName = this.querySelector('h3').textContent;
                showToast(`Learn more about ${partnerName}`);
            });
        });

        // Tour Card Booking
        document.querySelectorAll('.tour-card').forEach(card => {
            card.addEventListener('click', function() {
                const tourName = this.querySelector('h3').textContent;
                showToast(`Booking opened for ${tourName}`);
            });
        });

        // Newsletter Subscription
        document.querySelectorAll('button').forEach(button => {
            if (button.textContent === 'Subscribe') {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const emailInput = this.parentElement.querySelector('input[type="email"]');
                    if (emailInput && emailInput.value) {
                        showToast('Successfully subscribed to newsletter!');
                        emailInput.value = '';
                    }
                });
            }
        });

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Responsive adjustments
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                const navLinks = document.querySelector('.nav-links');
                navLinks.style.display = 'flex';
                navLinks.style.position = 'static';
                navLinks.style.flexDirection = 'row';
                navLinks.style.padding = '0';
                navLinks.style.background = 'none';
                navLinks.style.boxShadow = 'none';
            }
        });


//Login page script file....from here

        function showForm(form) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotForm');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const forgotTab = document.getElementById('forgotTab');

    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    forgotForm.classList.remove('active');
    loginTab.classList.remove('active');
    registerTab.classList.remove('active');
    forgotTab.classList.remove('active');

    if (form === 'login') {
      loginForm.classList.add('active');
      loginTab.classList.add('active');
    } else if (form === 'register') {
      registerForm.classList.add('active');
      registerTab.classList.add('active');
    } else if (form === 'forgot') {
      forgotForm.classList.add('active');
      forgotTab.classList.add('active');
    }
  }

  // Example of submitting forms via fetch, not full production code
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      class: form.class.value,
      email: form.email.value,
      phone: form.phone.value,
      schoolName: form.schoolName.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value
    };
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const resp = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await resp.json();
    alert(result.message);
  });

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      emailOrPhone: form.emailOrPhone.value,
      password: form.password.value
    };
    const resp = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await resp.json();
    if (resp.ok) {
      // store token, redirect to dashboard
      localStorage.setItem('token', result.token);
      window.location.href = '/dashboard.html';
    } else {
      alert(result.message);
    }
  });

  document.getElementById('forgotForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { email: form.email.value };
    const resp = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await resp.json();
    alert(result.message);
  });

