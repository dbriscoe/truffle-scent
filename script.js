const header = document.querySelector('[data-header]');
const reveals = document.querySelectorAll('.reveal');
const menuToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = siteNav?.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(Boolean(open)));
});

const welcomeCurtain = document.querySelector('[data-welcome-curtain]');
const welcomeEnter = document.querySelector('[data-welcome-enter]');
function openWelcomeCurtain() {
  document.body.classList.add('gate-open');
  welcomeCurtain?.setAttribute('aria-hidden', 'true');
}
welcomeEnter?.addEventListener('click', openWelcomeCurtain);
welcomeCurtain?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') openWelcomeCurtain();
});
if (prefersReducedMotion) openWelcomeCurtain();

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null;

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 36, 220)}ms`;
  if (observer) observer.observe(el);
  else el.classList.add('in-view');
});

document.querySelectorAll('[data-sound-control]').forEach((control) => {
  const audio = control.querySelector('[data-audio]');
  const button = control.querySelector('[data-sound-toggle]');
  const label = control.querySelector('[data-sound-label]');
  if (!audio || !button || !label) return;

  const sync = (playing) => {
    button.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', playing ? 'true' : 'false');
    label.textContent = playing ? 'Pause' : 'Play me';
  };

  button.addEventListener('click', async () => {
    try {
      document.querySelectorAll('[data-audio]').forEach((item) => {
        if (item !== audio) item.pause();
      });
      document.querySelectorAll('[data-sound-toggle]').forEach((btn) => {
        if (btn !== button) btn.classList.remove('is-playing');
      });
      if (audio.paused) {
        await audio.play();
        sync(true);
      } else {
        audio.pause();
        sync(false);
      }
    } catch (error) {
      label.textContent = 'Tap again';
    }
  });
  audio.addEventListener('ended', () => sync(false));
  audio.addEventListener('pause', () => {
    if (!audio.ended) sync(false);
  });
});

const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
window.addEventListener('pointermove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  mouse.active = true;
}, { passive: true });
window.addEventListener('pointerleave', () => { mouse.active = false; });

const tiltCards = document.querySelectorAll('.tilt-card');
for (const card of tiltCards) {
  card.addEventListener('pointermove', (event) => {
    if (prefersReducedMotion) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotate(${x * 1.2}deg) rotateY(${x * 4}deg) rotateX(${-y * 3}deg) translateY(-4px)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
}

document.querySelectorAll('[data-hero-interactive]').forEach((stage) => {
  stage.addEventListener('pointermove', (event) => {
    if (prefersReducedMotion) return;
    const rect = stage.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    stage.style.setProperty('--mx', `${x}px`);
    stage.style.setProperty('--my', `${y}px`);
    stage.style.setProperty('--rx', `${(x / rect.width - 0.5) * 8}deg`);
    stage.style.setProperty('--ry', `${(0.5 - y / rect.height) * 8}deg`);
    stage.classList.add('is-awake');
  });
  stage.addEventListener('pointerleave', () => {
    stage.classList.remove('is-awake');
    stage.style.removeProperty('--mx');
    stage.style.removeProperty('--my');
    stage.style.removeProperty('--rx');
    stage.style.removeProperty('--ry');
  });
});

function setupAmbientCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx || prefersReducedMotion) return;
  const particles = [];
  const count = Math.min(86, Math.max(46, Math.floor(window.innerWidth / 18)));
  let dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    while (particles.length < count) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.8 + 0.7,
        a: Math.random() * 0.45 + 0.12
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy + Math.sin((Date.now() / 3000) + p.x * 0.01) * 0.015;
      if (p.x < -30) p.x = window.innerWidth + 30;
      if (p.x > window.innerWidth + 30) p.x = -30;
      if (p.y < -30) p.y = window.innerHeight + 30;
      if (p.y > window.innerHeight + 30) p.y = -30;

      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (mouse.active && dist < 160) {
        p.x += dx / Math.max(dist, 1) * 0.55;
        p.y += dy / Math.max(dist, 1) * 0.55;
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(239, 210, 155, ${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      if (mouse.active && dist < 170) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(239, 210, 155, ${0.12 * (1 - dist / 170)})`;
        ctx.lineWidth = 1;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  draw();
}

document.querySelectorAll('[data-ambient-canvas]').forEach(setupAmbientCanvas);

function makeTargets(width, height) {
  const off = document.createElement('canvas');
  const octx = off.getContext('2d');
  off.width = Math.max(320, Math.floor(width));
  off.height = Math.max(280, Math.floor(height));
  octx.clearRect(0, 0, off.width, off.height);
  octx.fillStyle = '#fff';
  octx.textAlign = 'center';
  octx.textBaseline = 'middle';
  octx.font = `700 ${Math.floor(Math.min(off.width * 0.28, off.height * 0.38))}px Georgia, serif`;
  octx.fillText('T&S', off.width / 2, off.height / 2);
  const data = octx.getImageData(0, 0, off.width, off.height).data;
  const points = [];
  const step = Math.max(7, Math.floor(off.width / 70));
  for (let y = 0; y < off.height; y += step) {
    for (let x = 0; x < off.width; x += step) {
      const alpha = data[(y * off.width + x) * 4 + 3];
      if (alpha > 80 && Math.random() > 0.2) points.push({ x, y });
    }
  }
  const ringCount = 96;
  const radius = Math.min(off.width, off.height) * 0.38;
  for (let i = 0; i < ringCount; i++) {
    const a = (i / ringCount) * Math.PI * 2;
    points.push({
      x: off.width / 2 + Math.cos(a) * radius,
      y: off.height / 2 + Math.sin(a) * radius
    });
  }
  return points;
}

function setupConstellation(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx || prefersReducedMotion) return;
  const parent = canvas.parentElement;
  const particles = [];
  let targets = [];
  let dpr = 1;
  const targetCount = 230;

  function resize() {
    const rect = parent.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(320, Math.floor(rect.width * dpr));
    canvas.height = Math.max(280, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    targets = makeTargets(rect.width, rect.height);
    while (particles.length < targetCount) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        tx: rect.width / 2,
        ty: rect.height / 2,
        vx: 0,
        vy: 0,
        r: Math.random() * 1.9 + 0.8,
        phase: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.42 + 0.28
      });
    }
  }

  function draw() {
    const rect = parent.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    const localMouse = {
      x: mouse.x - rect.left,
      y: mouse.y - rect.top,
      active: mouse.active && mouse.x >= rect.left && mouse.x <= rect.right && mouse.y >= rect.top && mouse.y <= rect.bottom
    };

    particles.forEach((p, i) => {
      const t = targets[i % targets.length] || { x: rect.width / 2, y: rect.height / 2 };
      const wobble = Math.sin(Date.now() / 1500 + p.phase) * 4;
      p.tx = t.x + wobble;
      p.ty = t.y + Math.cos(Date.now() / 1800 + p.phase) * 4;

      p.vx += (p.tx - p.x) * 0.006;
      p.vy += (p.ty - p.y) * 0.006;
      p.vx *= 0.88;
      p.vy *= 0.88;

      if (localMouse.active) {
        const dx = p.x - localMouse.x;
        const dy = p.y - localMouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 135) {
          p.vx += dx / Math.max(dist, 1) * 0.9;
          p.vy += dy / Math.max(dist, 1) * 0.9;
        }
      }

      p.x += p.vx;
      p.y += p.vy;
      ctx.beginPath();
      ctx.fillStyle = `rgba(245, 221, 173, ${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 3) {
      const a = particles[i];
      const b = particles[(i + 17) % particles.length];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 56) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(245, 221, 173, ${0.055 * (1 - dist / 56)})`;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  draw();
}

document.querySelectorAll('[data-constellation-canvas]').forEach(setupConstellation);

const locationPins = document.querySelectorAll('[data-location-pin]');
const locationTitle = document.querySelector('[data-location-title]');
const locationCopy = document.querySelector('[data-location-copy]');
locationPins.forEach((pin) => {
  pin.addEventListener('click', () => {
    locationPins.forEach((p) => p.classList.remove('is-active'));
    pin.classList.add('is-active');
    if (locationTitle && locationCopy) {
      locationTitle.textContent = pin.dataset.title || 'Metro Manila';
      locationCopy.textContent = pin.dataset.copy || '';
    }
  });
});
locationPins[0]?.classList.add('is-active');

const dialog = document.querySelector('[data-product-dialog]');
const dialogTitle = document.querySelector('[data-dialog-title]');
const dialogCopy = document.querySelector('[data-dialog-copy]');
const dialogClose = document.querySelector('[data-dialog-close]');
document.querySelectorAll('[data-product-card]').forEach((card) => {
  const button = card.querySelector('button');
  button?.addEventListener('click', () => {
    if (!dialog || !dialogTitle || !dialogCopy) return;
    dialogTitle.textContent = card.dataset.title || 'Serving note';
    dialogCopy.textContent = card.dataset.note || '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  });
});
dialogClose?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});
