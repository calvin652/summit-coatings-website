/* =============================================================
   SUMMIT COATINGS LLC — MAIN JAVASCRIPT
   summitcoatingsllc.com
   ============================================================= */

(function () {
  'use strict';

  /* --------------------------------------------------
     Mobile menu toggle
  -------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  function openMenu() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on any mobile nav link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close if viewport widens past mobile breakpoint
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* --------------------------------------------------
     Header scroll style
  -------------------------------------------------- */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  /* --------------------------------------------------
     Intersection Observer — fade-in animations
  -------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Fallback: show all for old browsers
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  /* --------------------------------------------------
     Image placeholder fallback
     When an <img> fails to load (file doesn't exist
     yet), replace it with a labeled placeholder div.
     Drop a real .jpg with the matching filename into
     /images/ and the real image will load instead.
  -------------------------------------------------- */
  function makePlaceholder(img) {
    if (img.dataset.phApplied === '1') return;
    img.dataset.phApplied = '1';

    var src = img.getAttribute('src') || '';
    var filename = src.split('/').pop() || 'image.jpg';
    var label = img.getAttribute('alt') || '';
    var isSquare = img.classList.contains('logo') ||
                   img.width === img.height ||
                   img.closest('.site-logo') ||
                   img.closest('.f-logo');

    var ph = document.createElement('div');
    ph.className = 'img-placeholder' + (isSquare ? ' ph-square' : '');
    ph.setAttribute('role', 'img');
    ph.setAttribute('aria-label', label || filename);

    var nameSpan = document.createElement('span');
    nameSpan.className = 'ph-name';
    nameSpan.textContent = filename;
    ph.appendChild(nameSpan);

    if (label && !isSquare) {
      var labelSpan = document.createElement('span');
      labelSpan.className = 'ph-label';
      labelSpan.textContent = label;
      ph.appendChild(labelSpan);
    }

    // Preserve sizing classes from the original img
    if (img.className) {
      img.className.split(/\s+/).forEach(function (c) {
        if (c && c !== 'portfolio-img' && c !== 'svc-detail-img') ph.classList.add(c);
      });
    }

    if (img.parentNode) img.parentNode.replaceChild(ph, img);
  }

  document.querySelectorAll('img').forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      makePlaceholder(img);
    } else {
      img.addEventListener('error', function () { makePlaceholder(img); });
    }
  });

  /* --------------------------------------------------
     Smooth scroll for on-page anchor links
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-h'), 10) || 72;
        var top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
        closeMenu();
      }
    });
  });

})();
