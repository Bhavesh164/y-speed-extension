chrome.commands.onCommand.addListener(function(command) {
  if (command === "toggle-speed") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: function() {
          var video = document.querySelector('video');
          video.playbackRate = video.playbackRate === 1 ? 2 : 1;
        }
      });
    });
  }
});
