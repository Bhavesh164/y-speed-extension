chrome.commands.onCommand.addListener(function(command) {
	if (command === "toggle-speed") {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.scripting.executeScript({
				target: {tabId: tabs[0].id},
				function: function() {
					var video = document.querySelector('video');
					video.playbackRate = video.playbackRate === 1 ? 2 : 1;
					// Simulate a click on the gear icon
					var gearIcon = document.querySelector('.ytp-settings-button');
					if (gearIcon) {
						gearIcon.click();
					}
					// Update the YouTube player's speed control display
					var speed=1;
					if(video.playbackRate=='2'){
						speed='2x';
					}else{
						speed='Normal';
					}
					// document.querySelectorAll('.ytp-menuitem-content')[1].textContent = speed;

					var elements = document.querySelectorAll('.ytp-menuitem-content');
					for (var i = 0; i < elements.length; i++) {
						var elementContent = elements[i].textContent;
						if(elementContent=='Normal' || elementContent=='2x'){
							elements[i].textContent=speed;
						}
					}
					document.querySelector('#ytp-id-18').style.display="none";

				}
			});
		});
	}
});
