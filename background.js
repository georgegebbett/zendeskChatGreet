// Copyright 2020 George Gebbett. All rights reserved.



var promptName;
var greeting;

function setGreeting(){
	chrome.storage.sync.get({greeting: "Hi there [name]"}, function(items){
		greeting = items.greeting;
	});
}


chrome.commands.onCommand.addListener(function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message:"whatIsName"});
  });
});

