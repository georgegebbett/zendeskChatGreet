// Copyright 2020 George Gebbett. All rights reserved.



var promptName;
var greeting;

function setGreeting(){
	chrome.storage.sync.get({greeting: "Hi there [name]"}, function(items){
		greeting = items.greeting;
	});
}


chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message:"whatIsName"}, function(response){
    	console.log(response.name)
		setGreeting()
    	promptName = response.name
    	if (/^Visitor \d+/.test(promptName)) {
    		promptName = "";
    	} else if (/^.+\((\w+).*\)/.test(promptName)) {
    		console.log(/^.+\((\w+).*\)/.exec(promptName))
    		promptName = /^.+\((\w+).*\)/.exec(promptName)[1];
    	} else if (/^\w+\s\w+$/.test(promptName)) {
    		promptName = /^(\w+)\s\w+$/.exec(promptName)[1];
    	}
		var fullGreet = greeting.replace("[name]", " ".concat(promptName.substring(0, 1).toUpperCase(), promptName.substring(1)));
		chrome.tabs.executeScript(tabs[0].id, {code:"document.getElementsByClassName(\"meshim_dashboard_components_chatPanel_ChatTextAreaList chat_input valid\")[0].value = \"".concat(fullGreet).concat("\"")})
    })
  });
});

