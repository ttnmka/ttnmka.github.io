// Navbar scroll effect
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  btn.textContent = '发送中...';
  btn.disabled = true;
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = '✓ 询盘已收到！我们会尽快与您联系。 / Inquiry received! We will get back to you soon.';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
    btn.textContent = '发送询盘 / Send Inquiry';
    btn.disabled = false;
  }, 3000);
  this.reset();
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .factory-item, .why-card').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
