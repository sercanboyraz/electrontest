const { remote } = require('electron');
const { BrowserWindow } = remote;
let print_win;

function navigateTo(url) {
  document.querySelector('webview').src = url;
}

function getControlsHeight() {
  let controls = document.querySelector('#controls');
  if (controls) {
    return controls.offsetHeight;
  }
  return 0;
}

function iddaaButton() {
  document.querySelector('#iddaa').onclick = () => {
    navigateTo("http://www.iddaa.com");
  };
}

function nesineButton() {
  document.querySelector('#nesine').onclick = () => {
    navigateTo("http://www.nesine.com");
  };
}

function sahadanButton() {
  document.querySelector('#sahadan').onclick = () => {
    navigateTo("http://www.sahadan.com");
  };
}

function milliPiyangoButton() {
  document.querySelector('#milliPiyango').onclick = () => {
    navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_sayisal.php");
  };
}

<<<<<<< HEAD
function mackolikButton() {
  document.querySelector('#mackolik').onclick = () => {
    navigateTo("http://www.mackolik.com");
  };
}

function iddaatvbutton() {
  document.querySelector('#iddaatv').onclick = () => {
    navigateTo("http://iddaatv.iddaa.com.tr/");
  };
}
=======

function mackolikButton() {
  document.querySelector('#mackolik').onclick = () => {
   let attribute = document.getElementById('webview');
   let home = attribute.getAttribute("data-home");
   navigateTo("http://www.mackolik.com");
 };
}

function print() {
  let webview = document.querySelector('webview');
  print_win = new BrowserWindow({'auto-hide-menu-bar':true});
  print_win.loadURL(webview.src);
  print_win.webContents.on('did-finish-load', () => {
    print_win.webContents.print();
  });
}
>>>>>>> 795ced2215a7ac011cd1a8f0b812b2de3c543ca1
