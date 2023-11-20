/* global browser Prism */

function renderSource(src) {
	document.getElementById('source').innerHTML = Prism.highlight(src, Prism.languages.html, 'html');
}

browser.runtime.sendMessage({
	type: 'getHtmlForPopup'
});

browser.runtime.onMessage.addListener(msg => {
	console.log('popup', msg);
	if (msg.type !== 'html') return;

	renderSource(msg.data);
});

const infoBtn = document.getElementById('info-icon');
const aboutPopup = document.getElementById('about');
const closeAbout = document.getElementById('closeAbout');
const main = document.getElementById('main');

infoBtn.addEventListener('click', () => {
	aboutPopup.classList.remove('hidden');
	main.classList.add('popup-shown');
});

closeAbout.addEventListener('click', () => {
	aboutPopup.classList.add('hidden');
	main.classList.remove('popup-shown');
});