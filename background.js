//background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.duplicate(tab.id, function(tab){
    chrome.tabs.executeScript(null, {file: "killClap.js"});
  });
});