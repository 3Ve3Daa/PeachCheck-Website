(function() {
  'use strict';

  function loadIncludes() {
    const headerEl = document.getElementById('header-include');
    const footerEl = document.getElementById('footer-include');

    if (headerEl) {
      fetch('/assets/partials/header.html')
        .then(function(r) { return r.text(); })
        .then(function(html) {
          headerEl.innerHTML = html;
          initNav();
          if (window.lucide) lucide.createIcons();
          setActiveNav();
        })
        .catch(function(err) { console.error('Header load failed', err); });
    }

    if (footerEl) {
      fetch('/assets/partials/footer.html')
        .then(function(r) { return r.text(); })
        .then(function(html) {
          footerEl.innerHTML = html;
          if (window.lucide) lucide.createIcons();
        })
        .catch(function(err) { console.error('Footer load failed', err); });
    }
  }

  function initNav() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 20) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      });
    }

    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav-close');

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', function() { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; });
    }
    if (closeBtn && mobileNav) {
      closeBtn.addEventListener('click', function() { mobileNav.classList.remove('open'); document.body.style.overflow = ''; });
    }
    if (mobileNav) {
      mobileNav.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() { mobileNav.classList.remove('open'); document.body.style.overflow = ''; });
      });
    }
  }

  function setActiveNav() {
    const path = location.pathname;
    document.querySelectorAll('.nav-links a, .docs-nav a').forEach(function(a) {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href !== '/' && path.startsWith(href)) a.classList.add('active');
      else if (href === '/' && path === '/') a.classList.add('active');
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
  }

  function initFaq() {
    document.querySelectorAll('.faq-question').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  function initCopyButtons() {
    document.querySelectorAll('.code-block').forEach(function(block) {
      if (block.querySelector('.copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', 'Копировать');
      btn.innerHTML = '<i data-lucide="copy"></i><span>Копировать</span>';
      btn.addEventListener('click', function() {
        const text = block.innerText.replace(/Копировать|Скопировано/g, '').trim();
        navigator.clipboard.writeText(text).then(function() {
          btn.innerHTML = '<i data-lucide="check"></i><span>Скопировано</span>';
          if (window.lucide) lucide.createIcons();
          setTimeout(function() {
            btn.innerHTML = '<i data-lucide="copy"></i><span>Копировать</span>';
            if (window.lucide) lucide.createIcons();
          }, 2000);
        });
      });
      block.appendChild(btn);
    });
  }

  function initLucideWhenReady() {
    if (window.lucide) {
      lucide.createIcons();
    } else {
      setTimeout(function() {
        if (window.lucide) lucide.createIcons();
      }, 500);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadIncludes();
    initReveal();
    initFaq();
    initCopyButtons();
    initLucideWhenReady();
  });
})();
