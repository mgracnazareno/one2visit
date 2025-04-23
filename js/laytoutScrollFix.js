function adjustStickyHeight() {
  const left = document.querySelector(".left-sticky");
  const right = document.querySelector(".right-scroll");

  if (!left || !right) return;

  const rightHeight = right.offsetHeight;
  const viewportHeight = window.innerHeight;

  // Only adjust if the right is taller than the viewport
  if (rightHeight > viewportHeight) {
    left.style.minHeight = rightHeight + "px";
  } else {
    left.style.minHeight = "100vh";
  }
}

// Adjust on load and when window resizes
window.addEventListener("load", adjustStickyHeight);
window.addEventListener("resize", adjustStickyHeight);
