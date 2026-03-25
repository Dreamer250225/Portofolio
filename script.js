
  // ── PRELOADER
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 1800);
  });

  // ── CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
  function animRing() {
    rx += (mx-rx)*.12; ry += (my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll('a,button,.skill-card,.cert-card,.contact-card,.highlight-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width='20px'; cursor.style.height='20px'; ring.style.width='52px'; ring.style.height='52px'; });
    el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; ring.style.width='36px'; ring.style.height='36px'; });
  });

  // ── THEME TOGGLE
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    html.setAttribute('data-theme', html.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
  });

  // ── HAMBURGER
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('open');
  });
  function closeMobile() { document.getElementById('mobileNav').classList.remove('open'); }

  // ── SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // Trigger hero on load
  setTimeout(() => { document.querySelectorAll('#hero .reveal').forEach(e => e.classList.add('visible')); }, 200);

  // ── SCROLL TOP
  const st = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => { st.classList.toggle('show', window.scrollY > 400); });

  // ── FORM HANDLER
  function handleFormSend() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    let ok = true;
    inputs.forEach(i => { if(!i.value.trim()) ok=false; });
    if(!ok) { alert('Harap isi semua field terlebih dahulu.'); return; }
    const name = inputs[0].value;
    const subj = inputs[2].value;
    const msg = inputs[3].value;
    const mailto = `mailto:adityaekasyahputra88@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent('Dari: '+name+'\n\n'+msg)}`;
    window.open(mailto);
  }
