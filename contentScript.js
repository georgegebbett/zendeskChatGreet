console.log("Chat Window script started");

chrome.runtime.onMessage.addListener(
	function() {
        promptName = document.getElementsByClassName("name___3xOoo")[0].innerText;
        if (/^Visitor \d+/.test(promptName)) {
            promptName = "";
        } else if (/^.+\((\w+).*\)/.test(promptName)) {
            console.log(/^.+\((\w+).*\)/.exec(promptName));
            promptName = /^.+\((\w+).*\)/.exec(promptName)[1];
        } else if (/^\w+\s\w+$/.test(promptName)) {
            promptName = /^(\w+)[\w ]+$/.exec(promptName)[1];
        }
        var fullGreet = "Hi there ".concat(promptName);
        document.getElementsByClassName("meshim_dashboard_components_chatPanel_ChatTextAreaList chat_input valid")[0].value = fullGreet;
	}
);


function triggerUpdate(){
	console.log("message box changed");
	if (document.getElementsByClassName("meshim_dashboard_components_chatPanel_ChatTextAreaList chat_input valid").value === "/hi"){
		document.getElementsByClassName("meshim_dashboard_components_chatPanel_ChatTextAreaList chat_input valid").value = document.getElementsByClassName("name___3xOoo")[0].innerText;
	}
}


var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
	console.log(mutations);
    for (var mut = 0; mut < mutations.length; mut++) {
        console.log(mutations[mut]);
    }
    // ...
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
    subtree: true,
    attributes: true,
    childList: true
});