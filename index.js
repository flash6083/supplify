// TRIGGERING DARK MODE AND VICE VERSA
var mode = document.getElementById("mode-toggle");
mode.onclick = function(){
  document.body.classList.toggle("dark-theme");
  var element = document.getElementById("nav");
  element.classList.toggle("navbar-dark");
}
