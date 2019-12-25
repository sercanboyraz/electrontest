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
