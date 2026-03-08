/**
 * cursor.js
 * Custom cursor tracking with smooth animation
 * Tracks mouse position and animates cursor and ring independently
 */

export function initCursor() {
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  // Track mouse position
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Animate cursor and ring with easing
  function animateCursor() {
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
    
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    
    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}
