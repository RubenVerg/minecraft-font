const E_Statuses = {
  sure: 0,
  probably: 1,
  notsure: 2,
  closest: 3,
  unknown: 4
};

const I_Character = {
  char: "\u{0}",
  status: E_Statuses.sure
};

const files = {
  ascii: "ASCII",
  accented: "Accented",
  nonlatin_european: "Nonlatin European",
  ascii_sga: "ASCII (Standard Galactic Alphabet)"
};

const sizes = {
  ascii: [8, 8],
  accented: [9, 12],
  nonlatin_european: [8, 8],
  ascii_sga: [8, 8]
}

const urls = {
  ascii: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii.png',
  accented: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Faccented.png',
  nonlatin_european: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fnonlatin_european.png',
  ascii_sga: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_sga.png'
}

const urlsBlack = {
  ascii: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_black.png',
  accented: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Faccented_black.png',
  nonlatin_european: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fnonlatin_european_black.png',
  ascci_sga: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_sga_black.png'
}

function popup(charFile, charX, charY, characters) {
  document.querySelector("#popupTitle").textContent = files[charFile];
  
  console.log(document.querySelector('#popupMc'))
  document.querySelector('#popupMc').style.display = 'inline-block';
  document.querySelector('#popupMc').style.backgroundImage = 'url("' + urls[charFile] + '")';
  document.querySelector('#popupMc').style.backgroundPosition = sizes[charFile][0] * charX + ' ' + sizes[charFile][1] * charY;
  document.querySelector('#popupMc').style.width = sizes[charFile][0];
  document.querySelector('#popupMc').style.height = sizes[charFile][1];

  $("#popupModal").modal();
}
