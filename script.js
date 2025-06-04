
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let eye = { x: canvas.width / 2, y: canvas.height / 2, radius: 40 };

function drawEye() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(eye.x, eye.y, eye.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(eye.x, eye.y);
  const pupilOffset = 10;
  ctx.arc(eye.x + pupilOffset, eye.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#ff0000";
  ctx.fill();
}

function animate() {
  drawEye();
  requestAnimationFrame(animate);
}

animate();
