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
  ascii: []
}

const qsAll = (...args) => document.querySelectorAll(...args);

const qsOne = (...args) => document.querySelector(...args);

function popup(charFile, charX, charY, characters) {
  qsOne("#popupTitle").textContent = files[charFile];
  
  qsOne('#popupMc').src = '/' + files[charFile] + '.png'

  $("#popupModal").modal();
}
