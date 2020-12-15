// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var promptName;
var greeting = "Hi there";


chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message:"whatIsName"}, function(response){
    	console.log(response.name)
    	promptName = response.name
    	if (/^Visitor \d+/.test(promptName)) {
    		promptName = "";
    	} else if (/^.+\((\w+).*\)/.test(promptName)) {
    		console.log(/^.+\((\w+).*\)/.exec(promptName))
    		promptName = /^.+\((\w+).*\)/.exec(promptName)[1];
    	} else if (/^\w+\s\w+$/.test(promptName)) {
    		promptName = /^(\w+)\s\w+$/.exec(promptName)[1];
    	}
        promptName = greeting.concat(" ", promptName.substring(0,1).toUpperCase(), promptName.substring(1))
        chrome.tabs.executeScript(tabs[0].id, {code:"document.getElementsByClassName(\"meshim_dashboard_components_chatPanel_ChatTextAreaList chat_input valid\")[0].value = \"".concat(promptName).concat("\"")})
    })
  });
});