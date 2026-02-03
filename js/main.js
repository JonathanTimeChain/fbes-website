/**
 * FBES — Foundation for Bitcoin Educational Standards
 * Main JavaScript — Navigation, Animations, Form Handling
 */

(function () {
  'use strict';

  // =========================================
  // DOM Ready
  // =========================================
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderScroll();
    initNewsletterForm();
    initActiveNav();
  }


  // =========================================
  // Navigation (Mobile Toggle)
  // =========================================
  function initNavigation() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when clicking a link
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close nav on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }


  // =========================================
  // Smooth Scroll
  // =========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  }


  // =========================================
  // Header Scroll Effect
  // =========================================
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }


  // =========================================
  // Scroll Animations (Intersection Observer)
  // =========================================
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('[data-animate]');
    if (!animatedElements.length) return;

    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }


  // =========================================
  // Active Navigation Highlight
  // =========================================
  function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    var ticking = false;

    function updateActiveNav() {
      var scrollPos = window.scrollY + 120;

      sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateActiveNav();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial check
    updateActiveNav();
  }


  // =========================================
  // Newsletter Form (placeholder handler)
  // =========================================
  function initNewsletterForm() {
    var form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = form.querySelector('input[type="email"]');
      var submitBtn = form.querySelector('button[type="submit"]');

      if (!emailInput || !emailInput.value) return;

      // Visual feedback
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Subscribed ✓';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      emailInput.value = '';

      setTimeout(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }, 3000);

      // TODO: Connect to actual email service (Mailchimp, ConvertKit, etc.)
      console.log('[FBES] Newsletter signup — connect to email service provider');
    });
  }

})();
