const E_Statuses = {
  sure: 0,
  probably: 1,
  notsure: 2,
  closest: 3
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
  ascii: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii.png?v=1592920273925',
  accented: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Faccented.png?v=1592920274411',
  nonlatin_european: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fnonlatin_european.png?v=1592920274319',
  ascii_sga: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_sga.png?v=1592920274130'
}

const qsAll = (...args) => document.querySelectorAll(...args);

const qsOne = (...args) => document.querySelector(...args);

function popup(charFile, charX, charY, characters) {
  qsOne("#popupTitle").textContent = files[charFile];
  
  qsOne('#popupMc').style.display = 'inline-block';
  qsOne('#popupMC').style.backgroundImage = 'url("/' + urls[charFile] + '.png")';
  qsOne('#popupMc').style.backgroundPosition = sizes[charFile][0] * charX + ' ' + sizes[charFile][1] * charY;
  qsOne('#popupMc').style.width = sizes[charFile][0];
  qsOne('#popupMc').style.height = sizes[charFile][1];

  $("#popupModal").modal();
}
