chrome.commands.onCommand.addListener((command) => {
  if (command === "open_new_tab") {
    chrome.tabs.create({ url: 'chrome://newtab' });
  }
});


// chrome.action.onClicked.addListener(function() {
//     chrome.downloads.showDefaultFolder();
// });
