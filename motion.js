/* =============================================================
   Plato University — motion system
   GSAP + ScrollTrigger. Loaded on pages that opt into motion.
   Nothing here fires if the user has prefers-reduced-motion set.
   ============================================================= */
(function () {
  'use strict';

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.body.classList.add('motion-ready');
    return;
  }

  if (!window.gsap || !window.ScrollTrigger) {
    // GSAP failed to load (CDN down, ad blocker, etc.). Leave content
    // in its final static state. Do not throw.
    document.body.classList.add('motion-ready');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var desktop = window.matchMedia('(min-width: 900px)');

  // ------------------------------------------------------------
  // 1. Section scale-reveal (scrubbed) — every <section> inside
  //    <main> that is not opted out gets a gentle scale-in as it
  //    enters the viewport. No opacity fade — scale only.
  // ------------------------------------------------------------
  gsap.utils.toArray('main section.m-reveal').forEach(function (sec) {
    gsap.fromTo(
      sec,
      { scale: 0.965, transformOrigin: 'top center' },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top 88%',
          end: 'top 58%',
          scrub: 0.8,
        },
      }
    );
  });

  // ------------------------------------------------------------
  // 2. Rule-line draw (scrubbed) — dividers grow left→right as
  //    they enter view. Already CSS-visible — just scale on X.
  // ------------------------------------------------------------
  gsap.utils.toArray('.m-rule').forEach(function (rule) {
    gsap.fromTo(
      rule,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: rule,
          start: 'top 92%',
          end: 'top 40%',
          scrub: 1.2,
        },
      }
    );
  });

  // ------------------------------------------------------------
  // 3. Stagger reveal (scrubbed) — cards, list items, grid cells.
  //    Each child animates from a small scale + slight y offset.
  // ------------------------------------------------------------
  gsap.utils.toArray('.m-stagger').forEach(function (group) {
    var kids = group.children;
    if (!kids || !kids.length) return;
    gsap.fromTo(
      kids,
      { scale: 0.94, y: 18, transformOrigin: 'center top' },
      {
        scale: 1,
        y: 0,
        stagger: 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: group,
          start: 'top 88%',
          end: 'bottom 62%',
          scrub: 1,
        },
      }
    );
  });

  // ------------------------------------------------------------
  // 3b. Grow (scrubbed) — a card/element whose max-width expands
  //     as the user scrolls past. Used on the featured "problem"
  //     card to give a subtle sense of dynamism. Starts ~48rem,
  //     grows to ~56rem over the scroll window.
  // ------------------------------------------------------------
  gsap.utils.toArray('.m-grow').forEach(function (el) {
    gsap.fromTo(
      el,
      { maxWidth: '48rem' },
      {
        maxWidth: '54rem',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: 1.2,
        },
      }
    );
  });

  // ------------------------------------------------------------
  // 4. Dodecahedron — draw in via stroke-dashoffset on scroll,
  //    and rotate very slowly on idle when in view. Each .dodec-mark
  //    animates independently.
  // ------------------------------------------------------------
  gsap.utils.toArray('.dodec-mark').forEach(function (mark) {
    var paths = mark.querySelectorAll('svg path');
    var group = mark.querySelector('.dodec-group');
    if (!paths.length) return;

    paths.forEach(function (p) {
      var len = p.getTotalLength ? p.getTotalLength() : 600;
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });

    // Scrubbed draw: as the mark enters view, the edges trace in.
    gsap.to(paths, {
      strokeDashoffset: 0,
      ease: 'none',
      stagger: 0.04,
      scrollTrigger: {
        trigger: mark,
        start: 'top 92%',
        end: 'top 55%',
        scrub: 1.2,
      },
    });

    // Idle rotation — slow, continuous, subtle. Only active when
    // the mark is on screen, to save CPU.
    if (group) {
      var idle = gsap.to(group, {
        rotation: 360,
        duration: 36,
        ease: 'none',
        repeat: -1,
        paused: true,
      });
      ScrollTrigger.create({
        trigger: mark,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: function () { idle.play(); },
        onEnterBack: function () { idle.play(); },
        onLeave: function () { idle.pause(); },
        onLeaveBack: function () { idle.pause(); },
      });
    }
  });

  // ------------------------------------------------------------
  // 5. Annotation highlight sweep — each .annot becomes a scrubbed
  //    highlighter as it enters the upper half of the viewport.
  //    Only applied to annotations that opted in via .m-annot-sweep.
  // ------------------------------------------------------------
  gsap.utils.toArray('.m-annot-sweep').forEach(function (el) {
    var proxy = { s: 0 };
    gsap.to(proxy, {
      s: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'top 52%',
        scrub: 0.6,
        onUpdate: function () {
          el.style.setProperty('--sweep', proxy.s + '%');
        },
      },
    });
  });

  // ------------------------------------------------------------
  // 6. Lineage parade (index-only) — the row of names "Plato,
  //    Seneca, Montaigne…". Each name scales up slightly as it
  //    enters the viewport, scrubbed, creating a parade effect
  //    as the reader scrolls past.
  // ------------------------------------------------------------
  gsap.utils.toArray('.m-lineage').forEach(function (row) {
    var names = row.querySelectorAll('.annot');
    if (!names.length) return;

    names.forEach(function (n) {
      gsap.fromTo(
        n,
        { scale: 0.82, y: 10, transformOrigin: 'center bottom' },
        {
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: n,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 0.6,
          },
        }
      );
    });
  });

  // ------------------------------------------------------------
  // 7. Hero pin (desktop only). The hero locks while the user
  //    scrolls; the headline scales up slightly, the eyebrow /
  //    CTA pull back, and the dodecahedron drifts downward as
  //    the pin releases.
  // ------------------------------------------------------------
  function buildHeroPin() {
    var hero = document.querySelector('[data-motion-hero-pin]');
    if (!hero) return null;
    var headline = hero.querySelector('[data-motion-hero-headline]');
    var fade = hero.querySelectorAll('[data-motion-hero-fade]');
    var dodec = hero.querySelector('[data-motion-hero-dodec]');

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=80%',
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    if (headline) {
      tl.to(headline, { scale: 1.035, ease: 'none' }, 0);
    }
    if (fade && fade.length) {
      tl.to(fade, { opacity: 0, y: -8, ease: 'none' }, 0);
    }
    if (dodec) {
      tl.to(dodec, { y: 32, ease: 'none' }, 0);
    }
    return tl;
  }

  var heroTl = null;
  function applyHeroPin() {
    if (desktop.matches && !heroTl) {
      heroTl = buildHeroPin();
    } else if (!desktop.matches && heroTl) {
      heroTl.scrollTrigger && heroTl.scrollTrigger.kill(true);
      heroTl.kill();
      heroTl = null;
      ScrollTrigger.refresh();
    }
  }
  applyHeroPin();
  if (desktop.addEventListener) {
    desktop.addEventListener('change', applyHeroPin);
  } else if (desktop.addListener) {
    desktop.addListener(applyHeroPin);
  }

  // ------------------------------------------------------------
  // Final: flag body as motion-ready and refresh triggers after
  // fonts settle (Cormorant + Inter shift layout on load).
  // ------------------------------------------------------------
  document.body.classList.add('motion-ready');

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
  window.addEventListener('load', function () {
    ScrollTrigger.refresh();
  });
})();
