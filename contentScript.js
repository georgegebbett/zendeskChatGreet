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



