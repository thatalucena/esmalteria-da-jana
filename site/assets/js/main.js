/* ==========================================================================
   Esmalteria da Jana — interações e animações
   GSAP (ScrollTrigger, SplitText, MorphSVG) + Lenis
   ========================================================================== */
(() => {
  'use strict';

  const WA_NUMBER = '5583996452065';
  const PAGES = ['agendamento', 'curso'];
  const TITLES = {
    agendamento: 'Esmalteria da Jana — Alongamento em gel em João Pessoa',
    curso: 'Curso de Molde F1 com a Jana — Esmalteria da Jana',
  };
  const THEME_COLORS = { agendamento: '#F8E9E5', curso: '#2B1513' };

  // Caminhos dos formatos (viewBox 0 0 40 64) usados na prévia do agendamento
  const SHAPES = {
    'Quadrada': 'M8 54C8 61 32 61 32 54V9C32 7 31 6 29 6H11C9 6 8 7 8 9Z',
    'Amendoada': 'M8 54C8 61 32 61 32 54V26C32 15 25 6 20 4 15 6 8 15 8 26Z',
    'Bailarina': 'M8 54C8 61 32 61 32 54L28 8C28 6.8 27.2 6 26 6H14C12.8 6 12 6.8 12 8Z',
    'Stiletto': 'M8 54C8 61 32 61 32 54V32C32 20 22 5 20 1 18 5 8 20 8 32Z',
    'Quero ajuda para escolher': 'M8 54C8 61 32 61 32 54V22C32 12 27 8 20 8S8 12 8 22Z',
  };
  const SHINES = {
    'Quadrada': 'M12.5 46V14',
    'Amendoada': 'M12.5 46V24',
    'Bailarina': 'M13.5 46L15 14',
    'Stiletto': 'M12.5 46V30',
    'Quero ajuda para escolher': 'M12.5 46V24',
  };
  const HELP_SHAPE = 'Quero ajuda para escolher';

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const curtain = document.querySelector('.curtain');
  const curtainBrand = curtain.querySelector('.curtain__brand');
  const dock = document.querySelector('.dock');
  const menu = document.getElementById('menu');
  const menuBtn = document.querySelector('.menu-btn');
  const menuLinks = menu.querySelector('.menu__links');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const pageEls = Object.fromEntries(PAGES.map((p) => [p, document.getElementById(p)]));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  const animate = hasGsap && !reduceMotion;

  clearTimeout(window.__motionFailsafe);
  if (!animate) root.classList.remove('js-motion');

  const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  document.querySelectorAll('[data-wa]').forEach((a) => { a.href = waLink(a.dataset.wa); });

  if (hasGsap) gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin);

  /* ------------------------------------------------------------------------
     Scroll suave (Lenis) sincronizado com o ticker do GSAP
     ------------------------------------------------------------------------ */
  let lenis = null;
  if (!reduceMotion && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, autoRaf: !hasGsap });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  const headerOffset = () => -(header.offsetHeight + 12);

  function scrollToTarget(target, immediate = false) {
    const isNumber = typeof target === 'number';
    if (lenis) {
      lenis.scrollTo(target, { offset: isNumber ? 0 : headerOffset(), immediate, force: true, duration: 1.3 });
      return;
    }
    const top = isNumber ? target : target.getBoundingClientRect().top + window.scrollY + headerOffset();
    window.scrollTo({ top, behavior: immediate || reduceMotion ? 'auto' : 'smooth' });
  }

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Duplica o conteúdo dos letreiros uma única vez para o loop contínuo
  document.querySelectorAll('.marquee__track').forEach((track) => {
    track.innerHTML += track.innerHTML;
  });

  // Marcações do relógio (60 minutos, uma a cada 5)
  document.querySelectorAll('.dial__ticks').forEach((g) => {
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const line = document.createElementNS(ns, 'line');
      const r1 = i % 3 === 0 ? 34 : 37;
      line.setAttribute('x1', 60 + Math.sin(a) * r1);
      line.setAttribute('y1', 60 - Math.cos(a) * r1);
      line.setAttribute('x2', 60 + Math.sin(a) * 41);
      line.setAttribute('y2', 60 - Math.cos(a) * 41);
      g.appendChild(line);
    }
  });

  /* ------------------------------------------------------------------------
     Seletor Agendamento / Curso (indicador deslizante)
     ------------------------------------------------------------------------ */
  function positionSwitches(instant = false) {
    document.querySelectorAll('.switch').forEach((sw) => {
      const active = sw.querySelector('.switch__opt[aria-current="page"]');
      const thumb = sw.querySelector('.switch__thumb');
      if (!active || !active.offsetWidth) return;
      if (instant || !sw.classList.contains('is-ready')) thumb.style.transition = 'none';
      thumb.style.width = `${active.offsetWidth}px`;
      thumb.style.transform = `translateX(${active.offsetLeft - 4}px)`;
      thumb.getBoundingClientRect();
      thumb.style.transition = '';
      sw.classList.add('is-ready');
    });
  }
  window.addEventListener('resize', () => positionSwitches(true));

  /* ------------------------------------------------------------------------
     Menu do celular
     ------------------------------------------------------------------------ */
  let menuOpen = false;

  function buildMenuLinks(page) {
    const source = document.querySelector(`.sections-nav__list[data-for="${page}"]`);
    menuLinks.innerHTML = '';
    source.querySelectorAll('a').forEach((a, i) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.innerHTML = `<span>${String(i + 1).padStart(2, '0')}</span>${a.textContent}`;
      li.appendChild(link);
      menuLinks.appendChild(li);
    });
  }

  function openMenu() {
    if (menuOpen) return;
    menuOpen = true;
    menu.hidden = false;
    body.classList.add('menu-open');
    root.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
    lenis?.stop();
    positionSwitches(true);
    if (animate) {
      gsap.fromTo(menu, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6, ease: 'power4.inOut' });
      gsap.fromTo(menu.querySelectorAll('.switch, .menu__label, .menu__links li, .menu__foot'),
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.05, delay: 0.2, ease: 'power3.out' });
    }
    menu.querySelector('.switch__opt[aria-current="page"]')?.focus({ preventScroll: true });
  }

  function closeMenu({ focusButton = false, instant = false } = {}) {
    if (!menuOpen) return;
    menuOpen = false;
    menuBtn.setAttribute('aria-expanded', 'false');
    const done = () => {
      menu.hidden = true;
      body.classList.remove('menu-open');
      root.style.overflow = '';
      lenis?.start();
      if (hasGsap) gsap.set(menu, { clearProps: 'clipPath' });
    };
    if (animate && !instant) {
      gsap.to(menu, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.45, ease: 'power3.inOut', onComplete: done });
    } else {
      done();
    }
    if (focusButton) menuBtn.focus();
  }

  menuBtn.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) closeMenu({ focusButton: true });
  });
  window.matchMedia('(min-width: 80rem)').addEventListener('change', (e) => {
    if (e.matches) closeMenu({ instant: true });
  });

  /* ------------------------------------------------------------------------
     Páginas (Agendamento / Curso)
     ------------------------------------------------------------------------ */
  let currentPage = null;
  let pageCtx = null;
  let pageSplits = [];
  let pageMMs = [];
  let introTl = null;
  let busy = false;

  const pageOf = (el) => el.closest('[data-page]')?.dataset.page ?? null;

  function applyPage(page) {
    PAGES.forEach((p) => { pageEls[p].hidden = p !== page; });
    body.classList.toggle('theme-dark', page === 'curso');
    body.classList.toggle('theme-light', page !== 'curso');
    document.querySelectorAll('.switch__opt').forEach((a) => {
      if (a.dataset.go === page) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.querySelectorAll('.sections-nav__list').forEach((list) => {
      list.hidden = list.dataset.for !== page;
      list.querySelectorAll('a').forEach((a) => a.classList.remove('is-active'));
    });
    document.querySelectorAll('[data-page-cta]').forEach((el) => { el.hidden = el.dataset.pageCta !== page; });
    buildMenuLinks(page);
    document.title = TITLES[page];
    metaTheme.setAttribute('content', THEME_COLORS[page]);
    currentPage = page;
    positionSwitches();
  }

  function teardown() {
    introTl?.kill();
    introTl = null;
    pageMMs.forEach((mm) => mm.revert());
    pageMMs = [];
    pageCtx?.revert();
    pageCtx = null;
    pageSplits.forEach((s) => s.revert());
    pageSplits = [];
    dock.classList.remove('is-visible');
  }

  function swap(page, anchor) {
    teardown();
    applyPage(page);
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true, force: true });
    setupPage(page);
    if (anchor) scrollToTarget(anchor, true);
  }

  function goTo(page, { push = true, anchor = null } = {}) {
    if (busy) return;

    if (page === currentPage) {
      scrollToTarget(anchor ?? 0);
      return;
    }

    if (push) history.pushState({ page }, '', `#${anchor ? anchor.id : page}`);

    if (!animate) {
      swap(page, anchor);
      return;
    }

    busy = true;
    const toDark = page === 'curso';
    gsap.set(curtain, { backgroundColor: toDark ? '#2B1513' : '#F8E9E5', transformOrigin: '50% 100%' });
    gsap.set(curtainBrand, { color: toDark ? '#E4AEB4' : '#2C1411' });

    gsap.timeline({ onComplete: () => { busy = false; } })
      .to(curtain, { scaleY: 1, duration: 0.65, ease: 'power4.inOut' })
      .fromTo(curtainBrand, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out' }, '-=0.25')
      .add(() => swap(page, anchor))
      .to(curtainBrand, { autoAlpha: 0, y: -16, duration: 0.3, ease: 'power2.in' }, '+=0.15')
      .set(curtain, { transformOrigin: '50% 0%' })
      .to(curtain, { scaleY: 0, duration: 0.75, ease: 'power4.inOut' })
      .add(() => introTl?.play(), '-=0.45');
  }

  /* ------------------------------------------------------------------------
     Animações de cada página (criadas ao entrar, revertidas ao sair)
     ------------------------------------------------------------------------ */
  function buildIntro(pageEl) {
    const hero = pageEl.querySelector('.hero');
    const heading = hero.querySelector('[data-split-intro]');
    const introEls = hero.querySelectorAll('[data-intro]');
    const arches = hero.querySelectorAll('[data-arch]');
    const split = SplitText.create(heading, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    pageSplits.push(split);

    gsap.set(heading, { visibility: 'visible' });
    gsap.set(split.lines, { yPercent: 115 });
    gsap.set(introEls, { autoAlpha: 0, y: 26 });
    gsap.set(arches, { visibility: 'visible', clipPath: 'inset(100% 0% 0% 0%)' });
    gsap.set(hero.querySelectorAll('[data-arch] img'), { scale: 1.3 });

    return gsap.timeline({
      paused: true,
      defaults: { ease: 'power4.out' },
      onComplete: () => { split.revert(); },
    })
      .to(split.lines, { yPercent: 0, duration: 1.15, stagger: 0.1 })
      .to(introEls, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out' }, 0.3)
      .to(arches, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, stagger: 0.18, ease: 'expo.inOut' }, 0.05)
      .to(hero.querySelectorAll('[data-arch] img'), { scale: 1, duration: 1.8, stagger: 0.18, ease: 'expo.out' }, 0.25);
  }

  function setupReveals(pageEl) {
    // Títulos de seção: linhas sobem de dentro de uma máscara
    pageEl.querySelectorAll('[data-split]').forEach((heading) => {
      const split = SplitText.create(heading, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
      pageSplits.push(split);
      gsap.from(split.lines, {
        yPercent: 115,
        duration: 1.1,
        stagger: 0.09,
        ease: 'power4.out',
        scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
        onComplete: () => split.revert(),
      });
    });

    // Blocos de conteúdo
    const reveals = pageEl.querySelectorAll('[data-reveal]');
    gsap.set(reveals, { autoAlpha: 0, y: 40 });
    ScrollTrigger.batch(reveals, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        overwrite: true,
        clearProps: 'transform',
      }),
    });

    // Arcos fora do hero: a moldura se abre de baixo para cima
    const arches = [...pageEl.querySelectorAll('[data-arch]')].filter((a) => !a.closest('.hero'));
    gsap.set(arches, { clipPath: 'inset(100% 0% 0% 0%)' });
    ScrollTrigger.batch(arches, {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, stagger: 0.12, ease: 'expo.inOut' });
        const imgs = batch.flatMap((a) => [...a.querySelectorAll('img')]);
        if (imgs.length) gsap.fromTo(imgs, { scale: 1.25 }, { scale: 1, duration: 1.8, stagger: 0.12, ease: 'expo.out' });
      },
    });
  }

  function setupParallax(pageEl) {
    const hero = pageEl.querySelector('.hero');
    const scrub = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
    gsap.to(hero.querySelector('.arch--sm'), { yPercent: -18, ease: 'none', scrollTrigger: scrub });
    gsap.to(hero.querySelector('.seal'), { yPercent: -60, ease: 'none', scrollTrigger: { ...scrub } });
    gsap.to(hero.querySelector('.seal__ring'), { rotation: 360, duration: 24, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });

    const mm = gsap.matchMedia();
    pageMMs.push(mm);
    mm.add('(min-width: 64rem)', () => {
      pageEl.querySelectorAll('.gallery__item').forEach((item, i) => {
        gsap.fromTo(item.querySelector('.arch'), { y: i % 2 ? 40 : 0 }, {
          y: i % 2 ? -40 : -12,
          ease: 'none',
          scrollTrigger: { trigger: item.closest('.gallery'), start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    });
  }

  function setupMarquee(pageEl) {
    pageEl.querySelectorAll('.marquee__track').forEach((track) => {
      const loop = gsap.to(track, { xPercent: -50, duration: 32, ease: 'none', repeat: -1 });
      let direction = 1;
      ScrollTrigger.create({
        trigger: track,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          direction = self.direction;
          const boost = Math.min(Math.abs(self.getVelocity()) / 300, 5);
          gsap.to(loop, {
            timeScale: direction * (1 + boost),
            duration: 0.25,
            overwrite: true,
            onComplete: () => gsap.to(loop, { timeScale: direction, duration: 1.2, ease: 'power2.out' }),
          });
        },
      });
    });
  }

  function setupCounters(pageEl) {
    pageEl.querySelectorAll('[data-count]').forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const format = (v) => prefix + v.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
      const counter = { v: 0 };
      el.textContent = format(0);
      gsap.to(counter, {
        v: target,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => { el.textContent = format(counter.v); },
      });
    });
  }

  // Menu de seções: destaca a seção visível
  function setupScrollSpy(page) {
    const links = [...document.querySelectorAll(`.sections-nav__list[data-for="${page}"] a`)];
    links.forEach((link) => {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (!target) return;
      ScrollTrigger.create({
        trigger: target,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: (self) => {
          if (self.isActive) links.forEach((l) => l.classList.toggle('is-active', l === link));
          else link.classList.remove('is-active');
        },
      });
    });
  }

  // CTA fixo no celular: aparece depois do hero e some perto do formulário/turmas e do fechamento
  function setupDock(pageEl) {
    const hero = pageEl.querySelector('.hero');
    const target = pageEl.querySelector(pageEl.dataset.page === 'curso' ? '#turmas' : '#agendar');
    const closing = pageEl.querySelector('.closing');
    const state = { pastHero: false, inTarget: false, inClosing: false };
    const sync = () => dock.classList.toggle('is-visible', state.pastHero && !state.inTarget && !state.inClosing);

    ScrollTrigger.create({ trigger: hero, start: 'bottom top+=80', end: 'max', onToggle: (s) => { state.pastHero = s.isActive; sync(); } });
    ScrollTrigger.create({ trigger: target, start: 'top bottom', end: 'bottom top', onToggle: (s) => { state.inTarget = s.isActive; sync(); } });
    ScrollTrigger.create({ trigger: closing, start: 'top bottom', end: 'max', onToggle: (s) => { state.inClosing = s.isActive; sync(); } });
  }

  /* ---------- Curso: hero vivo (cartões flutuando, brilhos, parallax do mouse) ---------- */
  function setupCourseHero(pageEl) {
    const art = pageEl.querySelector('.hero__art--curso');
    if (!art) return;

    art.querySelectorAll('[data-float]').forEach((card, i) => {
      gsap.to(card, { yPercent: i % 2 ? 10 : -10, duration: 2.6 + i * 0.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    });
    art.querySelectorAll('[data-twinkle]').forEach((star, i) => {
      gsap.fromTo(star, { scale: 0.35, autoAlpha: 0.25, rotation: 0 }, {
        scale: 1.1, autoAlpha: 1, rotation: 90, duration: 1.4 + i * 0.35, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.4,
      });
    });

    if (!canHover) return;
    const layers = [
      [art.querySelector('.arch--xl'), 10],
      [art.querySelector('.arch--sm'), 22],
      [art.querySelector('.seal'), 30],
      ...[...art.querySelectorAll('[data-float]')].map((el) => [el, 36]),
    ].filter(([el]) => el);
    const movers = layers.map(([el, depth]) => ({
      depth,
      x: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3.out' }),
      y: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3.out' }),
    }));
    const hero = pageEl.querySelector('.hero');
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      movers.forEach((m) => { m.x(nx * m.depth); m.y(ny * m.depth); });
    };
    const onLeave = () => movers.forEach((m) => { m.x(0); m.y(0); });
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }

  /* ---------- Curso: relógio de 1 hora ---------- */
  function setupDial(pageEl) {
    const dial = pageEl.querySelector('.dial');
    if (!dial) return;
    const fill = dial.querySelector('.dial__fill');
    const knob = dial.querySelector('.dial__knob');
    gsap.timeline({ scrollTrigger: { trigger: dial, start: 'top 85%', once: true }, defaults: { duration: 2, ease: 'power3.out' } })
      .fromTo(fill, { strokeDashoffset: 100 }, { strokeDashoffset: 0 }, 0)
      .fromTo(knob, { rotation: 0 }, { rotation: 360, svgOrigin: '60 60' }, 0);
  }

  /* ---------- Curso: o que você aprende (imagem acompanha a lista) ---------- */
  function setupLearn(pageEl) {
    const learn = pageEl.querySelector('.learn');
    if (!learn) return;
    const items = [...learn.querySelectorAll('.learn__item')];
    const media = [...learn.querySelectorAll('.learn__media')];
    const current = learn.querySelector('.learn__current');
    let active = 0;
    let z = 2;

    const setActive = (i) => {
      if (i === active) return;
      active = i;
      items.forEach((item, idx) => item.classList.toggle('is-active', idx === i));
      const next = media[i];
      media.forEach((m) => m.classList.toggle('is-active', m === next));
      current.textContent = String(i + 1).padStart(2, '0');
      if (animate) {
        gsap.set(next, { zIndex: ++z });
        gsap.fromTo(next, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'expo.inOut' });
        gsap.fromTo(next, { scale: 1.15 }, { scale: 1, duration: 1.4, ease: 'expo.out' });
        gsap.fromTo(current, { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' });
      }
    };

    const mm = gsap.matchMedia();
    pageMMs.push(mm);
    mm.add('(min-width: 64rem)', () => {
      learn.classList.add('is-scrolly');
      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 60%',
          end: 'bottom 60%',
          onToggle: (self) => { if (self.isActive) setActive(i); },
        });
      });
      return () => learn.classList.remove('is-scrolly');
    });
    mm.add('(max-width: 63.99rem)', () => {
      ScrollTrigger.batch(items, { start: 'top 75%', onEnter: (batch) => batch.forEach((it) => it.classList.add('is-active')) });
    });
  }

  /* ---------- Curso: jornada (rolagem horizontal fixada no desktop) ---------- */
  function setupJourney(pageEl) {
    const journey = pageEl.querySelector('.journey');
    if (!journey) return;
    const viewport = journey.querySelector('.journey__viewport');
    const track = journey.querySelector('.journey__track');
    const fill = journey.querySelector('.journey__fill');
    const steps = [...journey.querySelectorAll('.step')];

    const mm = gsap.matchMedia();
    pageMMs.push(mm);

    mm.add('(min-width: 64rem)', () => {
      journey.classList.add('is-animated');
      const distance = () => {
        const padLeft = parseFloat(getComputedStyle(viewport).paddingLeft) || 0;
        return Math.max(0, track.scrollWidth - (window.innerWidth - padLeft));
      };
      const move = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: journey,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.fromTo(fill, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: journey, start: 'top top', end: () => `+=${distance()}`, scrub: 1, invalidateOnRefresh: true } });
      steps.forEach((step) => {
        ScrollTrigger.create({ trigger: step, containerAnimation: move, start: 'left 78%', toggleClass: 'is-reached' });
        gsap.from(step.querySelector('.step__card'), {
          y: 70, rotation: 4, autoAlpha: 0, ease: 'power2.out',
          scrollTrigger: { trigger: step, containerAnimation: move, start: 'left 100%', end: 'left 70%', scrub: true },
        });
      });
      return () => journey.classList.remove('is-animated');
    });

    mm.add('(max-width: 63.99rem)', () => {
      journey.classList.add('is-animated');
      gsap.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: track, start: 'top 70%', end: 'bottom 70%', scrub: true } });
      steps.forEach((step) => {
        ScrollTrigger.create({ trigger: step, start: 'top 70%', toggleClass: 'is-reached' });
        gsap.from(step.querySelector('.step__card'), { x: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: step, start: 'top 88%', once: true } });
      });
      return () => journey.classList.remove('is-animated');
    });
  }

  /* ---------- Curso: ingressos inclinam com o mouse ---------- */
  function setupTilt(pageEl) {
    if (!canHover) return;
    const cleanups = [];
    pageEl.querySelectorAll('[data-tilt]').forEach((card) => {
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3.out' });
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3.out' });
      const ty = gsap.quickTo(card, 'y', { duration: 0.6, ease: 'power3.out' });
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 10);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
        ty(-8);
      };
      const onLeave = () => { rx(0); ry(0); ty(0); };
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', onLeave);
      cleanups.push(() => { card.removeEventListener('pointermove', onMove); card.removeEventListener('pointerleave', onLeave); });
    });
    return () => cleanups.forEach((fn) => fn());
  }

  function setupPage(page) {
    if (!hasGsap) return;
    const pageEl = pageEls[page];
    pageCtx = gsap.context((self) => {
      setupDock(pageEl);
      setupScrollSpy(page);
      setupLearn(pageEl);
      if (!animate) return;
      introTl = buildIntro(pageEl);
      setupReveals(pageEl);
      setupParallax(pageEl);
      setupMarquee(pageEl);
      setupCounters(pageEl);
      setupDial(pageEl);
      setupJourney(pageEl);
      const offHero = setupCourseHero(pageEl);
      const offTilt = setupTilt(pageEl);
      self.add(() => () => { offHero?.(); offTilt?.(); });
    }, pageEl);
    ScrollTrigger.refresh();
  }

  /* ------------------------------------------------------------------------
     Navegação: links de página e âncoras internas
     ------------------------------------------------------------------------ */
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;

    const inMenu = menu.contains(link);

    if (link.dataset.go) {
      e.preventDefault();
      if (inMenu) closeMenu({ instant: link.dataset.go !== currentPage });
      goTo(link.dataset.go);
      return;
    }

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#') || href.length < 2) return;
    const id = decodeURIComponent(href.slice(1));

    if (PAGES.includes(id)) {
      e.preventDefault();
      goTo(id);
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    if (inMenu) closeMenu({ instant: true });

    const page = pageOf(target);
    if (page && page !== currentPage) {
      goTo(page, { anchor: target });
      return;
    }
    scrollToTarget(target);
    if (target.tabIndex === -1) target.focus({ preventScroll: true });
  });

  window.addEventListener('popstate', () => {
    const { page, anchor } = resolveHash();
    goTo(page, { push: false, anchor });
  });

  function resolveHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (PAGES.includes(id)) return { page: id, anchor: null };
    const el = id ? document.getElementById(id) : null;
    const page = el ? pageOf(el) : null;
    return page ? { page, anchor: el } : { page: 'agendamento', anchor: null };
  }

  /* ------------------------------------------------------------------------
     FAQ (acordeão acessível, uma pergunta aberta por vez)
     ------------------------------------------------------------------------ */
  function setFaq(btn, open) {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded', String(open));
    btn.closest('.faq__item').classList.toggle('is-open', open);

    if (!animate) {
      panel.hidden = !open;
      if (hasGsap) ScrollTrigger.refresh();
      return;
    }

    gsap.killTweensOf(panel);
    if (!open) {
      gsap.to(panel, {
        height: 0,
        duration: 0.45,
        ease: 'power3.inOut',
        onComplete: () => { panel.hidden = true; gsap.set(panel, { clearProps: 'height' }); ScrollTrigger.refresh(); },
      });
      return;
    }
    panel.hidden = false;
    gsap.fromTo(panel, { height: 0 }, {
      height: 'auto',
      duration: 0.55,
      ease: 'power3.out',
      onComplete: () => { gsap.set(panel, { clearProps: 'height' }); ScrollTrigger.refresh(); },
    });
    gsap.fromTo(panel.children, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, delay: 0.08, ease: 'power3.out' });
  }

  document.querySelectorAll('[data-accordion]').forEach((list) => {
    list.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq__q');
      if (!btn) return;
      const willOpen = btn.getAttribute('aria-expanded') !== 'true';
      if (willOpen) {
        list.querySelectorAll('.faq__q[aria-expanded="true"]').forEach((other) => { if (other !== btn) setFaq(other, false); });
      }
      setFaq(btn, willOpen);
    });
  });

  /* ------------------------------------------------------------------------
     Curso: seletor "Qual é o seu momento?" (abas acessíveis)
     ------------------------------------------------------------------------ */
  document.querySelectorAll('.level__tabs').forEach((tablist) => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const select = (tab, focus = false) => {
      tabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        t.tabIndex = selected ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
      });
      if (focus) tab.focus();
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (animate) {
        gsap.fromTo(panel.children, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.06, ease: 'power3.out' });
        gsap.fromTo(panel.querySelector('.level__icon'), { rotation: -25, scale: 0.6 }, { rotation: 0, scale: 1, duration: 0.8, ease: 'back.out(2.5)' });
      }
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const dir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (e.key === 'Home' || e.key === 'End') {
          e.preventDefault();
          select(tabs[e.key === 'Home' ? 0 : tabs.length - 1], true);
        } else if (dir) {
          e.preventDefault();
          select(tabs[(i + dir + tabs.length) % tabs.length], true);
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     Agendamento: serviços + formato + período → mensagem no WhatsApp
     ------------------------------------------------------------------------ */
  const form = document.getElementById('booking-form');
  const serviceInputs = [...form.querySelectorAll('input[name="servico"]')];
  const servicesFieldset = form.querySelector('.services');
  const summary = document.getElementById('booking-summary');
  const shapeWrap = document.getElementById('shape-wrap');
  const shapePreview = form.querySelector('.shape__preview');
  const shapeSvg = form.querySelector('.shape__svg');
  const shapePath = document.getElementById('shape-path');
  const shapeShine = document.getElementById('shape-shine');
  const shapeName = document.getElementById('shape-name');
  const errorEl = document.getElementById('booking-error');
  const bookingCta = document.getElementById('booking-cta');

  const serviceLabel = (input) => input.closest('.service').querySelector('.service__title').firstChild.textContent.trim();
  const checkedServices = () => serviceInputs.filter((i) => i.checked);
  const needsShape = () => checkedServices().some((i) => i.hasAttribute('data-needs-shape'));
  const selectedValue = (name) => form.querySelector(`input[name="${name}"]:checked`)?.value ?? '';

  function bookingMessage() {
    const services = checkedServices().map(serviceLabel);
    const lines = ['Olá, Jana! Vim pelo site e quero agendar um horário.', ''];
    lines.push(`*Serviços:* ${services.length ? services.join(', ') : 'ainda vou escolher'}`);
    if (needsShape()) {
      const shape = selectedValue('formato');
      lines.push(`*Formato:* ${shape === HELP_SHAPE ? 'quero ajuda para escolher' : (shape || 'ainda não escolhi')}`);
    }
    lines.push(`*Melhor período:* ${selectedValue('periodo') || 'tanto faz'}`);
    lines.push('', 'Pode me passar os valores e os horários disponíveis?');
    return lines.join('\n');
  }

  let shownChips = new Set();
  function renderSummary() {
    const labels = checkedServices().map(serviceLabel);
    summary.innerHTML = '';
    if (!labels.length) {
      summary.innerHTML = '<li class="panel__empty">Nenhum serviço escolhido ainda.</li>';
      shownChips = new Set();
      return;
    }
    const fresh = [];
    labels.forEach((label) => {
      const li = document.createElement('li');
      li.textContent = label;
      summary.appendChild(li);
      if (!shownChips.has(label)) fresh.push(li);
    });
    shownChips = new Set(labels);
    if (animate && fresh.length) {
      gsap.from(fresh, { scale: 0.6, autoAlpha: 0, duration: 0.5, ease: 'back.out(2.2)', stagger: 0.05 });
    }
  }

  function toggleShapeWrap(show) {
    if (show === !shapeWrap.hidden) return;
    if (!animate) {
      shapeWrap.hidden = !show;
      return;
    }
    gsap.killTweensOf(shapeWrap);
    if (show) {
      shapeWrap.hidden = false;
      gsap.fromTo(shapeWrap, { height: 0, autoAlpha: 0 }, {
        height: 'auto', autoAlpha: 1, duration: 0.6, ease: 'power3.out',
        onComplete: () => { gsap.set(shapeWrap, { clearProps: 'height' }); ScrollTrigger.refresh(); },
      });
    } else {
      gsap.to(shapeWrap, {
        height: 0, autoAlpha: 0, duration: 0.45, ease: 'power3.inOut',
        onComplete: () => { shapeWrap.hidden = true; gsap.set(shapeWrap, { clearProps: 'height,opacity,visibility' }); ScrollTrigger.refresh(); },
      });
    }
  }

  function morphShape(value) {
    const isHelp = value === HELP_SHAPE;
    shapePreview.classList.toggle('is-filled', !isHelp);
    shapeName.textContent = isHelp ? 'A Jana te ajuda a escolher' : value;

    if (!hasGsap || !window.MorphSVGPlugin) {
      shapePath.setAttribute('d', SHAPES[value]);
      shapeShine.setAttribute('d', SHINES[value]);
      return;
    }
    const duration = reduceMotion ? 0 : 0.7;
    gsap.to(shapePath, { morphSVG: SHAPES[value], duration, ease: 'power3.inOut' });
    gsap.to(shapeShine, { morphSVG: SHINES[value], duration, ease: 'power3.inOut' });
    if (!reduceMotion) {
      gsap.fromTo(shapeSvg, { scale: 0.82 }, { scale: 1, duration: 0.7, ease: 'back.out(2.4)', transformOrigin: '50% 100%' });
      gsap.fromTo(shapeName, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
    }
  }

  function updateBooking() {
    renderSummary();
    toggleShapeWrap(needsShape());
    bookingCta.href = waLink(bookingMessage());
    if (checkedServices().length) errorEl.hidden = true;
  }

  form.addEventListener('change', (e) => {
    if (e.target.name === 'formato') morphShape(e.target.value);
    updateBooking();
  });
  form.addEventListener('submit', (e) => e.preventDefault());

  bookingCta.addEventListener('click', (e) => {
    if (checkedServices().length) return;
    e.preventDefault();
    errorEl.hidden = false;
    const rect = servicesFieldset.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.6) scrollToTarget(servicesFieldset);
    serviceInputs[0].focus({ preventScroll: true });
    if (animate) {
      gsap.fromTo(errorEl, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.35)' });
      gsap.fromTo(servicesFieldset.querySelectorAll('.service'), { x: -6 }, { x: 0, duration: 0.6, stagger: 0.03, ease: 'elastic.out(1, 0.35)' });
    }
  });

  updateBooking();

  /* ------------------------------------------------------------------------
     Início
     ------------------------------------------------------------------------ */
  function playHeaderIntro() {
    if (!animate) return;
    gsap.fromTo(header, { autoAlpha: 0, yPercent: -100 }, { autoAlpha: 1, yPercent: 0, duration: 1, ease: 'power3.out', clearProps: 'transform' });
  }

  async function start() {
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    await Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]);

    const { page, anchor } = resolveHash();
    applyPage(page);
    setupPage(page);
    playHeaderIntro();
    if (anchor) scrollToTarget(anchor, true);
    introTl?.play();
  }

  window.addEventListener('load', () => {
    positionSwitches(true);
    if (hasGsap) ScrollTrigger.refresh();
  });
  start();
})();
