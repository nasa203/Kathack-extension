// Calls content.js when the Chrome icon is clicked

chrome.browserAction.onClicked.addListener(function(tab) {
   // Inject content.js into the currently active tab
   chrome.tabs.executeScript(tab.id, {file: "content.js"}, function() {
       // Optional callback to check for errors
       if (chrome.runtime.lastError) {
           console.error("Script injection failed: ", chrome.runtime.lastError.message);
       } else {
           console.log("Script injected successfully.");
       }
   });
   chrome.tabs.executeScript(tab.id, {file: "p2.js"}, function() {
      // Optional callback to check for errors
      if (chrome.runtime.lastError) {
          console.error("Script injection failed: ", chrome.runtime.lastError.message);
      } else {
          console.log("Script injected successfully.");
      }
  });
});


