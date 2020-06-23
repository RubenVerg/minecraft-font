/**
 * @enum {Statuses}
 */
const Statuses = {
	sure: 'table-success',
	probably: 'table-info',
	notsure: 'table-warning',
	closest: 'table-danger',
	unknown: 'table-secondary'
};

/**
 * @interface Char A character.
 */
const Char = {
	char: "\u{0}",
	status: Statuses.sure
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

const totalSizes = {
	ascii: [16, 16],
	accented: [16, 75],
	nonlatin_european: [16, 63],
	ascii_sga: [16, 16]
}

const urlsWhite = {
	ascii: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii.png',
	accented: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Faccented.png',
	nonlatin_european: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fnonlatin_european.png',
	ascii_sga: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_sga.png'
}

const urls = {
	ascii: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_black.png',
	accented: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Faccented_black.png',
	nonlatin_european: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fnonlatin_european_black.png',
	ascii_sga: 'https://cdn.glitch.com/cbbdf2fb-da12-4b7b-964d-e54c67324efe%2Fascii_sga_black.png'
}

/**
 * @returns {HTMLElement}
 * @param  {...any} args Args to querySelector
 */
const qs = (...args) => document.querySelector(...args);

const sure = char => { return { char, status: 'sure' } };
const probably = char => { return { char, status: 'probably' } };
const notsure = char => { return { char, status: 'notsure' } };
const closest = char => { return { char, status: 'closest' } };
const unknown = char => { return { char, status: 'unknown' } };

/**
 * 
 * @param {string} charFile File the character is in
 * @param {number} charX X position of the character (as a tileset)
 * @param {number} charY Y position of the character (as a tileset)
 * @param {{char: string, status: Statuses}[]} characters Character(s) it represents
 */
function popup(charFile, charX, charY, characters) {
	document.querySelector("#popupTitle").textContent = files[charFile];

	const popupMc = qs('#popupMc')

	popupMc.classList.add('d-inline-block', 'char')
	popupMc.style.background = 'url(\'' + urls[charFile] + '\') -' + sizes[charFile][0] * charX + 'px -' + sizes[charFile][1] * charY + 'px';
	popupMc.style.width = sizes[charFile][0] + 'px';
	popupMc.style.height = sizes[charFile][1] + 'px';

	const popupTable = qs('#popupTable')

	const table = document.createElement('table');
	table.classList.add('table', 'table-borderless');

	for (let character of characters) {
		const tr = document.createElement('tr')
		const td = document.createElement('td');
		td.classList.add(Statuses[character.status], 'h5');
		const code = document.createElement('code');
		code.style.backgroundColor = 'var(--light)'
		code.style.fontFamily = "'Fira Code Light', 'Fira Code', 'FiraCode NF', 'FuraCode NF', 'Fira Mono Light', 'Fira Mono', 'Cascadia Code', 'Cascadia Code PL', 'Cascadia Mono', 'Cascadia Mono PL', 'JetBrains Mono', 'Hack'"
		code.innerHTML = character.char.split(' ').join('&nbsp;');
		td.appendChild(code)

		tr.appendChild(td)
		table.appendChild(tr)
	}

	popupTable.innerHTML = table.outerHTML;

	$("#popupModal").modal();
}
