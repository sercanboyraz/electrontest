const {remote} = require('electron');
const {BrowserWindow} = remote;
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

function homeButton() {
   document.querySelector('#home').onclick = () => {
    let attribute = document.getElementById('webview');
    let home = attribute.getAttribute("data-home");
    navigateTo(home);
  };
}

function iddaaButton() {
  document.querySelector('#iddaa').onclick = () => {
   let attribute = document.getElementById('webview');
   let home = attribute.getAttribute("data-home");
   navigateTo("https://www.iddaa.com");
 };
}

function nesineButton() {
  document.querySelector('#nesine').onclick = () => {
   let attribute = document.getElementById('webview');
   let home = attribute.getAttribute("data-home");
   navigateTo("https://www.nesine.com");
 };
}

function sahadanButton() {
  document.querySelector('#sahadan').onclick = () => {
   let attribute = document.getElementById('webview');
   let home = attribute.getAttribute("data-home");
   navigateTo("https://www.sahadan.com");
 };
}

function milliPiyangoButton() {
  document.querySelector('#milliPiyango').onclick = () => {
   let attribute = document.getElementById('webview');
   let home = attribute.getAttribute("data-home");
   navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_sayisal.php?&embedded=true");
 };
}


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
