// Smooth scrolling to CTA
document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#cta').scrollIntoView({
      behavior: 'smooth'
    });
  });
  