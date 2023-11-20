/* global browser */

//var _data = '';

browser.runtime.onMessage.addListener(msg => {
	console.log('background', msg);

	switch (msg.type) {
		case 'htmlFromContent':
			//_data = msg.data;
			browser.runtime.sendMessage({
				type: 'html',
				data: msg.data
			});
			break;
		case 'getHtmlForPopup':
			browser.tabs.query({
				currentWindow: true,
				active: true
			}).then(tabs => {
				browser.tabs.sendMessage(tabs[0].id, {
					type: 'getHtml'
				});
			});
			break;
	}
});