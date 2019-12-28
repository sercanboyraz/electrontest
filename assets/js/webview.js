window.onresize = doLayout;

onload = () => {
  doLayout();
  iddaaButton();
  sahadanButton();
  nesineButton();
  sayisallotoButton();
  mackolikButton();
  iddaatvbutton();
  tjkbutton();
  onnumaraButton();
  sanstopuButton();
  superlotoButton();
  piyangoButton();
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
