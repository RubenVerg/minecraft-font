/**
 * @returns {{char: string, status: Statuses}[]}
 * @param {char} char Array input
 */
function arrToChar(char) {
	if (typeof char[0] == "string") {
		// A single character
		return [{ char: char[0], status: [char[1]] }]
	} else {
		// Multiple characters
		let r = [];
		for (let el of char) {
			r.push(...arrToChar(el));
		}
		return r;
	}
}

function gen() {
	const containter = qs('#tables');

	// -- ASCII --

	{
		const table = document.createElement('table');
		for (let lineNum = 0; lineNum < totalSizes.ascii[1]; lineNum++) {
			const row = document.createElement('tr')
			for (let cellNum = 0; cellNum < totalSizes.ascii[0]; cellNum++) {
				const cell = document.createElement('td');
				cell.classList.add('cell')
				cell.style.width = sizes.ascii[0] + 'px';
				cell.style.height = sizes.ascii[1] + 'px';
				cell.style.background = 'url(\'' + urls.ascii + '\') -' + sizes.ascii[0] * cellNum + 'px -' + sizes.ascii[1] * lineNum + 'px';
				cell.onclick = function () { popup('ascii', cellNum, lineNum, arrToChar(ascii[lineNum][cellNum])) }
				row.appendChild(cell);
			}
			table.appendChild(row);
		}
		const title = document.createElement('h5');
		title.textContent = 'ASCII';
		const con = document.createElement('div');
		con.appendChild(title);
		con.appendChild(table)
		containter.appendChild(con)
	}
}

gen()