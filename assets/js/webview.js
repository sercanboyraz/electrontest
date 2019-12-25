window.onresize = doLayout;

onload = () => {
  doLayout();
  // Topbar functions
  iddaaButton();
  sahadanButton();
  nesineButton();
  milliPiyangoButton();
<<<<<<< HEAD
  mackolikButton();
  iddaatvbutton();
=======
  homeButton();
  printButton();
  mackolikButton();
>>>>>>> 795ced2215a7ac011cd1a8f0b812b2de3c543ca1
};

function doLayout() {
  let webview = document.querySelector('webview');
  let windowWidth = document.documentElement.clientWidth;
  let windowHeight = document.documentElement.clientHeight;
  let controlsHeight = getControlsHeight();
  let webviewHeight = windowHeight - controlsHeight;

  webview.style.width = windowWidth + 'px';
  webview.style.height = webviewHeight + 'px';
}
