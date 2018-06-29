import 'p5'
window.setup = function () {
  console.log("Setup")
}
window.draw = function () {
  window.background(230);
  window.fill(255, 0, 255);
  window.ellipse(50, 50, 70, 70);
  window.noloop();
}

