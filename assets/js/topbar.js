
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
    navigateTo("https://www.nesine.com/iddaa/canli-mac-sonuclari/futbol");
  };
}

function sahadanButton() {
  document.querySelector('#sahadan').onclick = () => {
    navigateTo("https://www.sahadan.com/canli-sonuclar");
  };
}

function sayisallotoButton() {
  document.querySelector('#sayisalloto').onclick = () => {
    navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_sayisal.php");
  };
}

function mackolikButton() {
  document.querySelector('#mackolik').onclick = () => {
    navigateTo("https://www.mackolik.com/canli-sonuclar");
  };
}

function iddaatvbutton() {
  document.querySelector('#iddaatv').onclick = () => {
    navigateTo("http://iddaatv.iddaa.com.tr/");
  };
}

function tjkbutton() {
  document.querySelector('#tjk').onclick = () => {
    navigateTo("https://www.tjk.org/");
  };
}


function onnumaraButton() {
  document.querySelector('#onnumara').onclick = () => {
    navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_onnumara.php");
  };
}


function sanstopuButton() {
  document.querySelector('#sanstopu').onclick = () => {
    navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_sanstopu.php");
  };
}


function superlotoButton() {
  document.querySelector('#superloto').onclick = () => {
    navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_superloto.php");
  };
}


function piyangoButton() {
  document.querySelector('#piyango').onclick = () => {
    navigateTo("http://www.millipiyango.gov.tr/sonuclar/_cs_piyango.php");
  };
}
