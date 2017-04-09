document.getElementById('arrow')
        .addEventListener('click', function() {
  smoothScroll(window.innerHeight, 400);
});

function smoothScroll(length, time) {
  var interval = 20, // 50 fps
      steps = Math.floor(time / interval),
      step = Math.floor(length / steps);

  for (var i = 0; i < steps; i++) {
    setTimeout(function() {
      window.scrollBy(0, step);
    }, i * interval);
  }

  // last step
  setTimeout(function() {
    window.scrollTo(0, length);
  }, i * interval);
}
