/* global browser */

console.log('content script loaded');

browser.runtime.onMessage.addListener(msg => {
	console.log('content', msg);
	if (msg.type !== 'getHtml') return;

	let html = '';
	// There probably won't be any documents with
	// multiple children, but just in case...
	let ch = document.children;

	for (let i = 0; i < ch.length; i++) {
		html += ch[i].outerHTML;
	}

	browser.runtime.sendMessage({
		type: 'htmlFromContent',
		data: html
	});
});