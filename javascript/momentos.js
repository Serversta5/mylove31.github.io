const momentos = document.querySelectorAll('.momento');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

momentos.forEach(m => {
  m.style.opacity = 0;
  m.style.transform = 'translateY(30px)';
  observer.observe(m);
});

