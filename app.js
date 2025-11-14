// Portfolio JavaScript functionality

// Project data
const projectsData = [
  {
    id: 1,
    title: "Cabinet Model Design",
    software: "Creo Parametric",
    description: "Two-drawer cabinet with open storage section featuring sleek design with clean lines and contrasting materials. Demonstrates proficiency in geometric dimensioning, part modeling, and assembly techniques with attention to real-world manufacturability.",
    features: ["Two functional drawers", "Open storage section", "Clean geometric design", "Material contrast", "Manufacturing-ready"],
    applications: "Office and industrial environments",
    category: "Furniture Design"
  },
  {
    id: 2,
    title: "Heavy-Duty Industrial Rack",
    software: "Creo Software",
    description: "Robust storage solution designed for industrial and warehouse applications featuring high-strength steel frames, adjustable shelving levels, and reinforced beams to support substantial loads.",
    features: ["High-strength steel construction", "Adjustable shelving levels", "Reinforced beam structure", "Maximum space utilization", "Structural stability"],
    applications: "Industrial warehouses, machinery storage",
    category: "Industrial Design"
  },
  {
    id: 3,
    title: "Supermarket Display Rack",
    software: "Creo",
    description: "Functional, modular, and space-efficient display unit with adjustable shelves, side supports, and base stability features. Designed for easy assembly and optimal product organization in retail environments.",
    features: ["Modular design", "Adjustable shelving", "Easy assembly", "Space-efficient", "Retail-optimized"],
    applications: "Retail environments, supermarkets",
    category: "Retail Design"
  },
  {
    id: 4,
    title: "Portable X-ray Machine Prototype",
    software: "SolidWorks",
    description: "Non-working prototype demonstrating mechanical structure, component layout, and functional design of a compact, mobile X-ray system. CAD model lays foundation for future development and potential integration.",
    features: ["Compact design", "Mobile configuration", "Component layout", "Mechanical structure", "Prototype development"],
    applications: "Medical equipment, portable diagnostics",
    category: "Medical Device Design"
  },
  {
    id: 5,
    title: "Belt Conveyor System",
    software: "CAD Tools",
    description: "Simple yet efficient material handling system featuring durable frame, rotating pulleys, and continuous belt optimized for smooth operation. Demonstrates functional mechanical design with attention to alignment and motion.",
    features: ["Durable frame construction", "Rotating pulley system", "Continuous belt operation", "Smooth material transport", "Industrial-grade design"],
    applications: "Manufacturing, material handling",
    category: "Industrial Machinery"
  },
  {
    id: 6,
    title: "Steel Bed Design",
    software: "Advanced CAD Tools",
    description: "Sleek and modern steel bed design combining durability with aesthetic appeal. Features precise detailing in frame, joints, and support structure suitable for both residential and industrial interiors.",
    features: ["Modern steel construction", "Aesthetic appeal", "Precise joint details", "Structural integrity", "Contemporary styling"],
    applications: "Residential and industrial interiors",
    category: "Furniture Design"
  }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  console.log('Initializing portfolio app...');
  
  // Initialize all functionality
  setupMobileNavigation();
  setupSmoothScrolling();
  setupScrollAnimations();
  setupProgressBars();
  setupSkillBars();
  setupProjectModals();
  setupContactForm();
  setupIntersectionObserver();
  
  console.log('Portfolio app initialized successfully');
}

// Mobile Navigation Toggle
function setupMobileNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      console.log('Mobile menu toggled');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Smooth Scrolling Navigation
function setupSmoothScrolling() {
  console.log('Setting up smooth scrolling...');
  
  // Handle all anchor links
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    
    e.preventDefault();
    const targetId = target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
      console.log('Scrolling to:', targetId);
    }
  });
}

// Scroll Animations
function setupScrollAnimations() {
  // Add scroll event listener for navbar background
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(19, 52, 59, 0.98)';
        navbar.style.boxShadow = 'var(--shadow-md)';
      } else {
        navbar.style.background = 'rgba(19, 52, 59, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    }
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Progress Bars Animation
function setupProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  function animateProgressBars() {
    progressBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      if (progress) {
        setTimeout(() => {
          bar.style.width = progress + '%';
        }, 200);
      }
    });
  }

  // Animate when about section comes into view
  const aboutSection = document.querySelector('#about');
  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateProgressBars, 500);
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
  }
}

// Skill Bars Animation
function setupSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  function animateSkillBars() {
    skillBars.forEach((bar, index) => {
      const skill = bar.getAttribute('data-skill');
      if (skill) {
        setTimeout(() => {
          bar.style.width = skill + '%';
        }, index * 200); // Stagger animations
      }
    });
  }

  // Animate when skills section comes into view
  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
  }
}

// Project Modals
function setupProjectModals() {
  console.log('Setting up project modals...');
  
  const viewDetailsButtons = document.querySelectorAll('.view-details');
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSoftware = document.getElementById('modalSoftware');
  const modalCategory = document.getElementById('modalCategory');
  const modalApplications = document.getElementById('modalApplications');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalClose = document.getElementById('modalClose');

  console.log('Found modal elements:', {
    modal: !!modal,
    buttons: viewDetailsButtons.length,
    modalClose: !!modalClose
  });

  // Open modal
  viewDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const projectIndex = parseInt(this.getAttribute('data-project'));
      const project = projectsData[projectIndex];
      
      console.log('Opening modal for project:', projectIndex, project);
      
      if (project && modal) {
        // Populate modal content
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalSoftware) modalSoftware.textContent = project.software;
        if (modalCategory) modalCategory.textContent = project.category;
        if (modalApplications) modalApplications.textContent = project.applications;
        if (modalDescription) modalDescription.textContent = project.description;
        
        // Clear and populate features list
        if (modalFeaturesList) {
          modalFeaturesList.innerHTML = '';
          project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeaturesList.appendChild(li);
          });
        }
        
        // Show modal
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }
  }
}

// Contact Form
function setupContactForm() {
  console.log('Setting up contact form...');
  
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    // Ensure form inputs are working
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--color-primary)';
      });
      
      input.addEventListener('blur', function() {
        this.style.borderColor = 'var(--color-border)';
      });
    });
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Contact form submitted');
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name')?.trim();
      const email = formData.get('email')?.trim();
      const subject = formData.get('subject')?.trim();
      const message = formData.get('message')?.trim();
      
      console.log('Form data:', { name, email, subject, message });
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }
}

// Notification System
function showNotification(message, type = 'info') {
  console.log('Showing notification:', message, type);
  
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(n => n.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  
  const colors = {
    success: '#33808d',
    error: '#c0152f', 
    info: '#626c71'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    padding: 16px 24px;
    background: ${colors[type] || colors.info};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
    font-weight: 500;
    font-size: 14px;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Intersection Observer for animations
function setupIntersectionObserver() {
  const animatedElements = document.querySelectorAll('.project-card, .service-card, .skill-category');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // Set initial state and observe
  animatedElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(element);
  });
}

// Parallax effect for hero section
function setupParallaxEffect() {
  const heroShapes = document.querySelectorAll('.geometric-shape');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const rate = scrollTop * -0.5;
    
    heroShapes.forEach((shape, index) => {
      const rateMultiplier = (index + 1) * 0.2;
      shape.style.transform = `translateY(${rate * rateMultiplier}px) rotate(${scrollTop * 0.1}deg)`;
    });
  });
}

// Section reveal animations
function setupSectionReveal() {
  const sections = document.querySelectorAll('section:not(#home)');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    revealObserver.observe(section);
  });
  
  // Add revealed class styles
  const revealCSS = `
    section.revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = revealCSS;
  document.head.appendChild(style);
}

// Initialize additional effects when page loads
window.addEventListener('load', function() {
  console.log('Page loaded, initializing additional effects...');
  
  setupParallaxEffect();
  setupSectionReveal();
  
  // Add loaded class to body for CSS animations
  document.body.classList.add('loaded');
});

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    console.log('Page visible again');
  }
});

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
});

// Debug information
console.log('Portfolio JavaScript loaded successfully');
console.log('Projects data:', projectsData.length, 'projects loaded');