// Copyright 2020 George Gebbett. All rights reserved.


chrome.commands.onCommand.addListener(function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message:"whatIsName"});
  });
});

