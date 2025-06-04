
const pupil = document.querySelector('.pupil');
const eye = document.querySelector('.eye-container');

document.addEventListener('mousemove', (e) => {
  const rect = eye.getBoundingClientRect();
  const eyeX = rect.left + rect.width / 2;
  const eyeY = rect.top + rect.height / 2;
  const dx = e.clientX - eyeX;
  const dy = e.clientY - eyeY;
  const angle = Math.atan2(dy, dx);
  const distance = Math.min(20, Math.hypot(dx, dy) / 10);
  const x = distance * Math.cos(angle);
  const y = distance * Math.sin(angle);
  pupil.style.transform = `translate(${x}px, ${y}px) rotate(45deg)`;
});
