/* =============================================================
   Plato University — brand mark animation
   Drives the 3D tumbling dodecahedron in every page's topnav.
   Animates the inline <svg class="brand-mark"> elements directly.
   (Earlier, the animation lived inside logo.svg loaded via <object>,
   but iOS Safari doesn't reliably execute scripts in object-loaded
   SVG — moving it here makes the rotation work on mobile.)
   ============================================================= */
(function () {
  'use strict';

  var marks = document.querySelectorAll('svg.brand-mark .dodec-group');
  if (!marks.length) return;

  var PHI = (1 + Math.sqrt(5)) / 2;
  var IP = 1 / PHI;
  // 20 canonical regular-dodecahedron vertices
  var V = [
    [1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],
    [-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1],
    [0,IP,PHI],[0,IP,-PHI],[0,-IP,PHI],[0,-IP,-PHI],
    [IP,PHI,0],[IP,-PHI,0],[-IP,PHI,0],[-IP,-PHI,0],
    [PHI,0,IP],[PHI,0,-IP],[-PHI,0,IP],[-PHI,0,-IP]
  ];
  // 30 edges as vertex-index pairs
  var E = [
    [0,12],[1,12],[2,13],[3,13],[4,14],[5,14],[6,15],[7,15],
    [0,8],[1,9],[2,10],[3,11],[4,8],[5,9],[6,10],[7,11],
    [0,16],[1,17],[2,16],[3,17],[4,18],[5,19],[6,18],[7,19],
    [8,10],[9,11],[12,14],[13,15],[16,17],[18,19]
  ];

  var SCALE = 50;
  var PITCH_PERIOD = 61;   // seconds per X-axis revolution
  var YAW_PERIOD   = 47;   // seconds per Y-axis revolution — coprime with pitch
  var START_PITCH  = 0.384; // ~22° (matches the static fallback pose)
  var START_YAW    = 0.489; // ~28°

  var reduce = typeof matchMedia === 'function' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Each brand mark gets its own array of path nodes. If a mark has no
  // paths pre-rendered, populate 30 blanks so we can write into them.
  var instances = [];
  marks.forEach(function (group) {
    var paths = group.querySelectorAll('path');
    if (paths.length !== E.length) {
      while (group.firstChild) group.removeChild(group.firstChild);
      for (var n = 0; n < E.length; n++) {
        group.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
      }
      paths = group.querySelectorAll('path');
    }
    instances.push(paths);
  });

  function render(pitch, yaw) {
    var cy = Math.cos(yaw), sy = Math.sin(yaw);
    var cx = Math.cos(pitch), sx = Math.sin(pitch);
    var proj = [];
    for (var v = 0; v < V.length; v++) {
      var x = V[v][0], y = V[v][1], z = V[v][2];
      // X-rotation (pitch)
      var y1 = y * cx - z * sx;
      var z1 = y * sx + z * cx;
      // Y-rotation (yaw)
      var x2 = x * cy + z1 * sy;
      // orthographic projection; flip y for SVG's y-down coord system
      proj.push([x2 * SCALE, -y1 * SCALE]);
    }
    for (var i = 0; i < instances.length; i++) {
      var paths = instances[i];
      for (var k = 0; k < E.length; k++) {
        var a = E[k][0], b = E[k][1];
        var p1 = proj[a], p2 = proj[b];
        paths[k].setAttribute(
          'd',
          'M' + p1[0].toFixed(2) + ' ' + p1[1].toFixed(2) +
          'L' + p2[0].toFixed(2) + ' ' + p2[1].toFixed(2)
        );
      }
    }
  }

  if (reduce) { render(START_PITCH, START_YAW); return; }

  var start;
  var raf;
  function tick(t) {
    if (!start) start = t;
    var elapsed = (t - start) / 1000;
    var pitch = START_PITCH + (elapsed * 2 * Math.PI) / PITCH_PERIOD;
    var yaw   = START_YAW   + (elapsed * 2 * Math.PI) / YAW_PERIOD;
    render(pitch, yaw);
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);

  // Pause when tab is hidden; resume when visible.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    } else if (!raf) {
      start = null;
      raf = requestAnimationFrame(tick);
    }
  });
})();
