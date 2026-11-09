const header = document.getElementById('header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 8));

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  function sendQuote(e){
    e.preventDefault();
    const name = document.getElementById('cf-name').value;
    const contact = document.getElementById('cf-contact').value;
    const msg = document.getElementById('cf-msg').value;
    const typeEl = document.getElementById('cf-type');
    const type = typeEl ? typeEl.value : '';
    const body = encodeURIComponent(`Name: ${name}\nContact: ${contact}\nStructure type: ${type}\n\n${msg}`);
    window.location.href = `mailto:thomotsatsi@gmail.com?subject=${encodeURIComponent('Quote Request - ARE Civil')}&body=${body}`;
    return false;
  }

  // Ambient blueprint grid — slow drifting isometric lines, monochrome
  (function(){
    const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w, h, t = 0;

    function resize(){
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      const spacing = 46 * devicePixelRatio;
      const offset = (t * 0.15) % spacing;

      ctx.strokeStyle = 'rgba(255,255,255,0.045)';
      ctx.lineWidth = 1;

      // diagonal lines drifting down-right, evoking a contour/blueprint field
      for (let x = -h; x < w + h; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset - h, h);
        ctx.stroke();
      }
      // a few brighter accent lines
      ctx.strokeStyle = 'rgba(255,255,255,0.09)';
      for (let x = -h; x < w + h; x += spacing * 6) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset - h, h);
        ctx.stroke();
      }

      t += 1;
      if(!reduceMotion) requestAnimationFrame(draw);
    }
    window.addEventListener('resize', resize);
    resize();
    draw();
  })();


  // ---------- Mobile menu ----------
  (function(){
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('tabs-top');
    if(!toggle) return;
    const setOpen = (open) => {
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') setOpen(false); });
  })();

  // ---------- Active nav link on scroll ----------
  (function(){
    const navLinks = [...document.querySelectorAll('#tabs-top a')];
    const map = new Map(navLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const sections = [...map.keys()].map(id => document.getElementById(id)).filter(Boolean);
    const spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          navLinks.forEach(a => a.classList.remove('active'));
          const link = map.get(e.target.id);
          if(link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  })();

  // ---------- Lightbox for every figure ----------
  (function(){
    const box = document.getElementById('lightbox');
    const img = document.getElementById('lbImg');
    const cap = document.getElementById('lbCap');
    const figures = [...document.querySelectorAll('main .figure')];
    let index = 0, lastFocus = null;

    function show(i){
      index = (i + figures.length) % figures.length;
      const f = figures[index];
      const source = f.querySelector('img');
      img.src = source.currentSrc || source.src;
      img.alt = source.alt;
      const c = f.querySelector('figcaption');
      cap.textContent = c ? c.textContent : '';
    }
    function open(i){
      lastFocus = document.activeElement;
      show(i);
      box.hidden = false;
      document.body.classList.add('lb-open');
      document.getElementById('lbClose').focus();
    }
    function close(){
      box.hidden = true;
      document.body.classList.remove('lb-open');
      if(lastFocus) lastFocus.focus();
    }
    figures.forEach((f, i) => {
      f.setAttribute('tabindex', '0');
      f.setAttribute('role', 'button');
      f.addEventListener('click', () => open(i));
      f.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(i); } });
    });
    document.getElementById('lbClose').addEventListener('click', close);
    document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); show(index - 1); });
    document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); show(index + 1); });
    box.addEventListener('click', e => { if(e.target === box) close(); });
    document.addEventListener('keydown', e => {
      if(box.hidden) return;
      if(e.key === 'Escape') close();
      if(e.key === 'ArrowLeft') show(index - 1);
      if(e.key === 'ArrowRight') show(index + 1);
    });
  })();

  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
