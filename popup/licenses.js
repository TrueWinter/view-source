/* global LICENSES */

const oss = document.getElementById('oss');

for (let i = 0; i < LICENSES.length; i++) {
	let l = LICENSES[i];
	let heading = document.createElement('h3');
	heading.innerText = l.name;

	let license = document.createElement('div');
	license.innerText = l.license;

	oss.appendChild(heading);
	oss.appendChild(license);
}