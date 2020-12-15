chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse({name:document.getElementsByClassName("name___3xOoo")[0].innerText});
	}
);