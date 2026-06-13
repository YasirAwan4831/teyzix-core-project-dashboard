'use strict';

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const DATA = {
  profile: {
    name: 'Muhammad Yasir',
    role: 'Full Stack Developer',
    intro: 'Passionate full-stack developer specializing in the MERN stack, real-time systems and modern web architecture. I build scalable, user-focused applications that bridge elegant UI with powerful backend logic.',
    internship: 'TEYZIX CORE Full Stack Development Internship',
    avatar: 'yasir.png',
  },

  projects: [
    {
      id: 1,
      order: '01',
      title: 'Task Management Web App',
      description: 'A full-stack Task Management platform built with the MERN stack featuring JWT authentication, Kanban board, task assignment, workflow tracking and responsive project management for teams and organizations.',
      tools: ['MERN Stack', 'JWT Auth', 'Kanban Board', 'Drag & Drop', 'User Assignment', 'REST API', 'Vanilla CSS'],
      liveLink: 'https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-',
      githubLink: 'https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-',
      accent: '#6366F1',
    },
    {
      id: 2,
      order: '02',
      title: 'TEYZIX CORE Internship Portal',
      description: 'A modern full-stack internship management platform for handling applications, candidate management and administrative workflows. Features responsive UI, application tracking, admin controls, dark mode and scalable architecture.',
      tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN', 'Authentication', 'Dashboard', 'REST API', 'Admin Panel'],
      liveLink: 'https://teyzix-core-internship-portal-fs2.vercel.app/',
      githubLink: 'https://github.com/YasirAwan4831/teyzix-core-internship-portal-fs2',
      accent: '#22D3EE',
    },
    {
      id: 3,
      order: '03',
      title: 'Real-Time Collaborative Document Editor',
      description: 'A full-stack real-time collaborative editor built with React, Node.js, Express.js, Socket.IO and Firebase. Features live document synchronization, authentication, user presence tracking, version history and role-based collaboration.',
      tools: ['Full-Stack', 'React', 'Node.js', 'Express.js', 'Socket.IO', 'Firebase', 'AUTH', 'Real-Time Collab'],
      liveLink: 'https://github.com/YasirAwan4831/rt-collaborative-doc-editor-fs3',
      githubLink: 'https://github.com/YasirAwan4831/rt-collaborative-doc-editor-fs3',
      accent: '#10B981',
    },
  ],

  documents: [
    {
      id: 'cert',
      type: 'certificate',
      title: 'Internship Certificate',
      subtitle: 'Issued by TEYZIX CORE for successful completion of the Full Stack Development Internship program.',
      icon: '🏆',
      iconClass: 'gold',
      btnClass: 'gold-btn',
      btnLabel: 'View Certificate',
      date: '2025 · TEYZIX CORE',
    },
    {
      id: 'rec',
      type: 'recommendation',
      title: 'Recommendation Letter',
      subtitle: 'A formal recommendation from TEYZIX CORE leadership endorsing skills, work ethic and technical capabilities.',
      icon: '📄',
      iconClass: 'blue',
      btnClass: 'blue-btn',
      btnLabel: 'View Letter',
      date: '2025 · TEYZIX CORE',
    },
  ],

  socials: [
    { label: 'LinkedIn',   handle: 'yasirawan4831',           icon: '💼', color: '#0077B5', url: 'https://linkedin.com/in/yasirawan4831' },
    { label: 'GitHub',     handle: 'YasirAwan4831',            icon: '🐙', color: '#6E40C9', url: 'https://github.com/YasirAwan4831' },
    { label: 'Portfolio',  handle: 'yasirawaninfo.vercel.app', icon: '🌐', color: '#6366F1', url: 'https://yasirawaninfo.vercel.app/' },
    { label: 'LinkTree',   handle: 'futuristic-links',         icon: '🔗', color: '#22D3EE', url: 'https://yasirawan4831.github.io/futuristic-links-dashboard/' },
    { label: 'YouTube',    handle: 'YasirTech',                icon: '▶️', color: '#FF0000', url: 'https://www.youtube.com/@YasirTech-t1d' },
    { label: 'Twitter / X', handle: 'YasirAwan4831',           icon: '𝕏',  color: '#1DA1F2', url: 'https://x.com/YasirAwan4831' },
    { label: 'Instagram',  handle: 'yasirawan4831',            icon: '📸', color: '#E1306C', url: 'https://instagram.com/yasirawan4831' },
    { label: 'Email',      handle: 'my3154831409@gmail.com',   icon: '✉️', color: '#F59E0B', url: 'mailto:yasirawan4831@gmail.com' },
  ],

  password: 'Teyzix@2025',
};

/* ═══════════════════════════════════════════════════════
   PARTICLE CANVAS
═══════════════════════════════════════════════════════ */
function initCanvas() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], raf;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset = function () {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.alpha = Math.random() * 0.6 + 0.15;
      const palette = ['#6366F1', '#22D3EE', '#10B981', '#818CF8'];
      this.color = palette[Math.floor(Math.random() * palette.length)];
    };
    this.reset();
  }

  function makeParticles(n) {
    particles = [];
    for (let i = 0; i < n; i++) {
      const p = new Particle();
      p.x = Math.random() * W;
      p.y = Math.random() * H;
      particles.push(p);
    }
  }

  function drawLines() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - d / maxDist)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawLines();
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -5 || p.x > W + 5 || p.y < -5 || p.y > H + 5) p.reset();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    raf = requestAnimationFrame(loop);
  }

  resize();
  makeParticles(90);
  loop();
  window.addEventListener('resize', () => { resize(); makeParticles(90); });
}

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════
   ACTIVE NAV HIGHLIGHT
═══════════════════════════════════════════════════════ */
function initNavHighlight() {
  const sections = document.querySelectorAll('[data-section]');
  const links    = document.querySelectorAll('.nav-links a, .nav-mobile-menu a');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.dataset.section;
        links.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
}

/* ═══════════════════════════════════════════════════════
   MODAL / PASSWORD GATE
═══════════════════════════════════════════════════════ */
function openModal(docItem) {
  const overlay = document.getElementById('modal-overlay');
  const body    = document.getElementById('modal-body');

  body.innerHTML = `
    <div class="modal-title">${docItem.title}</div>
    <div class="modal-sub">This document is access-protected. Enter the passkey to continue.</div>
    <div class="modal-input-wrap">
      <input class="modal-input" id="pw-input" type="password" placeholder="Enter passkey…" autocomplete="off" />
      <div class="modal-error" id="pw-error">Incorrect passkey. Please try again.</div>
    </div>
    <button class="btn-modal-submit" id="pw-submit">🔓 Unlock &amp; View</button>
    <div class="modal-hint">Hint: Ask the portfolio owner for access.</div>
  `;

  overlay.classList.remove('hidden');
  setTimeout(() => document.getElementById('pw-input').focus(), 80);

  function attempt() {
    const val   = document.getElementById('pw-input').value.trim();
    const input = document.getElementById('pw-input');
    const error = document.getElementById('pw-error');
    if (val === DATA.password) {
      overlay.classList.add('hidden');
      window.open(
        docItem.type === 'certificate'
          ? 'certificate.pdf'
          : 'recommendation.pdf',
        '_blank'
      );
    } else {
      input.classList.add('error');
      error.classList.add('show');
      input.value = '';
      input.focus();
      setTimeout(() => { input.classList.remove('error'); error.classList.remove('show'); }, 2200);
    }
  }

  document.getElementById('pw-submit').addEventListener('click', attempt);
  document.getElementById('pw-input').addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });
}

/* ═══════════════════════════════════════════════════════
   DOM BUILDERS
═══════════════════════════════════════════════════════ */

/* ── NAV ── */
function buildNav() {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <a href="#home" class="nav-logo">&lt;TEYZIX CORE /&gt;</a>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#credentials">Credentials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="nav-burger" id="nav-burger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  `;
  return nav;
}

function buildMobileMenu() {
  const menu = document.createElement('div');
  menu.className = 'nav-mobile-menu';
  menu.id = 'nav-mobile-menu';
  menu.innerHTML = `
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#credentials">Credentials</a>
    <a href="#contact">Contact</a>
  `;
  return menu;
}

/* ── HERO ── */
function buildHero() {
  const sec = document.createElement('section');
  sec.className = 'hero';
  sec.id = 'home';
  sec.dataset.section = 'home';

  const info = document.createElement('div');
  info.className = 'hero-info reveal';
  info.innerHTML = `
    <div class="hero-badge"><span></span> Available for Opportunities</div>
    <h1 class="hero-name">${DATA.profile.name}</h1>
    <div class="hero-role">// ${DATA.profile.role}</div>
    <p class="hero-intro">${DATA.profile.intro}</p>
    <div class="hero-internship">
      <span class="dot">◆</span>
      <span>${DATA.profile.internship}</span>
    </div>
    <div class="hero-cta">
      <a href="#projects" class="btn-primary">View Projects →</a>
      <a href="#contact" class="btn-ghost">Get in Touch</a>
    </div>
  `;

  const imgWrap = document.createElement('div');
  imgWrap.className = 'hero-image-wrap reveal';

  const ring = document.createElement('div');
  ring.className = 'hero-image-ring';

  // Real profile image — falls back to emoji avatar if file not found
  const avatarImg = document.createElement('img');
  avatarImg.src = DATA.profile.avatar;   // 'yasir.png' — place in same folder
  avatarImg.alt = DATA.profile.name;
  avatarImg.className = 'hero-img';

  const fallback = document.createElement('div');
  fallback.className = 'hero-avatar-fallback';
  fallback.innerHTML = '👨‍💻';
  fallback.style.display = 'none';       // hidden unless image fails

  // If image fails to load, hide <img> and show emoji fallback
  avatarImg.addEventListener('error', () => {
    avatarImg.style.display = 'none';
    fallback.style.display  = 'flex';
  });

  imgWrap.appendChild(ring);
  imgWrap.appendChild(avatarImg);
  imgWrap.appendChild(fallback);
  sec.appendChild(info);
  sec.appendChild(imgWrap);
  return sec;
}

/* ── PROJECTS ── */
function buildProjects() {
  const sec = document.createElement('section');
  sec.id = 'projects';
  sec.dataset.section = 'projects';

  const header = document.createElement('div');
  header.className = 'section-header reveal';
  header.innerHTML = `
    <div class="section-eyebrow">// What I built</div>
    <h2 class="section-title">Featured <span>Projects</span></h2>
    <div class="section-line"></div>
  `;

  const grid = document.createElement('div');
  grid.className = 'projects-grid';

  DATA.projects.forEach((proj, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${idx * 0.1}s`;
    card.style.setProperty('--card-accent', proj.accent);

    const tools = proj.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-number">PROJECT ${proj.order}</div>
      <div class="project-title">${proj.title}</div>
      <div class="project-desc">${proj.description}</div>
      <div class="project-tools">${tools}</div>
      <div class="project-actions">
        <a href="${proj.liveLink}" target="_blank" rel="noopener" class="btn-view">🚀 View Project</a>
        <a href="${proj.githubLink}" target="_blank" rel="noopener" class="btn-icon" title="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  sec.appendChild(header);
  sec.appendChild(grid);
  return sec;
}

/* ── CREDENTIALS ── */
function buildCredentials() {
  const sec = document.createElement('section');
  sec.id = 'credentials';
  sec.dataset.section = 'credentials';

  const header = document.createElement('div');
  header.className = 'section-header reveal';
  header.innerHTML = `
    <div class="section-eyebrow">// Proof of Work</div>
    <h2 class="section-title">Certificate &amp; <span>Recommendation</span></h2>
    <div class="section-line"></div>
  `;

  const grid = document.createElement('div');
  grid.className = 'cert-grid';

  DATA.documents.forEach((doc, idx) => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.style.transitionDelay = `${idx * 0.12}s`;

    const btn = document.createElement('button');
    btn.className = `btn-view-doc ${doc.btnClass}`;
    btn.innerHTML = `🔐 ${doc.btnLabel}`;
    btn.addEventListener('click', () => openModal(doc));

    card.innerHTML = `
      <div class="cert-icon ${doc.iconClass}">${doc.icon}</div>
      <div class="cert-title">${doc.title}</div>
      <div class="cert-sub">${doc.subtitle}</div>
      <div class="cert-date">${doc.date}</div>
    `;
    card.appendChild(btn);
    grid.appendChild(card);
  });

  sec.appendChild(header);
  sec.appendChild(grid);
  return sec;
}

/* ── CONTACT ── */
function buildContact() {
  const sec = document.createElement('section');
  sec.id = 'contact';
  sec.dataset.section = 'contact';

  const header = document.createElement('div');
  header.className = 'section-header reveal';
  header.innerHTML = `
    <div class="section-eyebrow">// Let's Connect</div>
    <h2 class="section-title">Social <span>Links</span></h2>
    <div class="section-line"></div>
  `;

  const grid = document.createElement('div');
  grid.className = 'social-grid';

  DATA.socials.forEach((s, idx) => {
    const card = document.createElement('a');
    card.className = 'social-card reveal';
    card.href = s.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.transitionDelay = `${idx * 0.07}s`;
    card.innerHTML = `
      <div class="social-icon" style="background:${s.color}22;border:1px solid ${s.color}55">${s.icon}</div>
      <div>
        <div class="social-label">${s.label}</div>
        <div class="social-handle">@${s.handle}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  sec.appendChild(header);
  sec.appendChild(grid);
  return sec;
}

/* ── FOOTER ── */
function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const links = [
    { url: 'https://linkedin.com/in/yasirawan4831', icon: '💼', title: 'LinkedIn' },
    { url: 'https://github.com/YasirAwan4831', icon: '🐙', title: 'GitHub' },
    { url: 'mailto:yasirawan4831@gmail.com', icon: '✉️', title: 'Email' },
  ];

  const linkHTML = links.map(l =>
    `<a href="${l.url}" class="footer-link" title="${l.title}" target="_blank" rel="noopener">${l.icon}</a>`
  ).join('');

  footer.innerHTML = `
    <div class="footer-left">
      <span class="footer-logo">&lt;TEYZIX CORE /&gt;</span>
      <span class="footer-copy">© 2026 Muhammad Yasir · All rights reserved.</span>
    </div>
    <div class="footer-links">${linkHTML}</div>
  `;
  return footer;
}

/* ═══════════════════════════════════════════════════════
   NAV INTERACTIONS
═══════════════════════════════════════════════════════ */
function initNavInteractions() {
  const burger   = document.getElementById('nav-burger');
  const menu     = document.getElementById('nav-mobile-menu');
  const allLinks = document.querySelectorAll('.nav-mobile-menu a');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  allLinks.forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
    });
  });

  /* Scroll-shade nav */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    nav.style.background = window.scrollY > 40
      ? 'rgba(10,15,30,0.95)'
      : 'rgba(10,15,30,0.75)';
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════
   TYPEWRITER EFFECT FOR HERO ROLE
═══════════════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.querySelector('.hero-role');
  if (!el) return;
  const phrases = [
    '// Full Stack Developer',
    '// MERN Stack Engineer',
    '// React + Node.js Builder',
    '// Real-Time Systems Dev',
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const phrase = phrases[phraseIdx];
    el.textContent = deleting
      ? phrase.slice(0, charIdx--)
      : phrase.slice(0, charIdx++);

    let delay = deleting ? 45 : 80;
    if (!deleting && charIdx > phrase.length) { delay = 1800; deleting = true; }
    else if (deleting && charIdx < 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; delay = 300; }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 900);
}

/* ═══════════════════════════════════════════════════════
   STAGGER CARDS ON FIRST LOAD
═══════════════════════════════════════════════════════ */
function initStaggerFadeIn() {
  const hero = document.querySelector('.hero-info');
  const img  = document.querySelector('.hero-image-wrap');
  if (hero) { hero.style.opacity = 0; hero.style.transform = 'translateY(32px)'; }
  if (img)  { img.style.opacity  = 0; img.style.transform  = 'translateY(32px)'; }
  setTimeout(() => {
    if (hero) { hero.style.transition = 'opacity 0.7s ease, transform 0.7s ease'; hero.style.opacity = 1; hero.style.transform = ''; }
    if (img)  { img.style.transition  = 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s'; img.style.opacity  = 1; img.style.transform  = ''; }
  }, 150);
}

/* ═══════════════════════════════════════════════════════
   BOOTSTRAP — ASSEMBLE THE PAGE
═══════════════════════════════════════════════════════ */
function bootstrap() {
  const app = document.getElementById('app');

  app.appendChild(buildNav());
  app.appendChild(buildMobileMenu());
  app.appendChild(buildHero());
  app.appendChild(buildProjects());
  app.appendChild(buildCredentials());
  app.appendChild(buildContact());
  app.appendChild(buildFooter());

  initCanvas();
  initScrollReveal();
  initNavHighlight();
  initNavInteractions();
  initTypewriter();
  initStaggerFadeIn();
}

/* ── Entry point ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}