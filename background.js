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
					var elements = document.getElementsByClassName('ytp-menuitem');

					// Loop through the elements
					for(var i = 0; i < elements.length; i++){
						// Check if the element has the 'aria-haspopup' attribute set to 'true'
						if(elements[i].getAttribute('aria-haspopup') === 'true'){
							// Simulate a click event on the element
							elements[i].click();
							break; // Exit the loop if you only want to click the first matching element
						}
					}
					// Get the parent element
					var parentElement = document.querySelector('.ytp-popup.ytp-settings-menu');
					
					document.querySelector('.ytp-popup.ytp-settings-menu').style.display="none";
					gearIcon.click();

					var ccButton = document.querySelector('.ytp-subtitles-button');
					if(ccButton) {
						if(ccButton.getAttribute('aria-pressed') === 'true') {
							ccButton.click();
						} 
					}
				}
			});
		});
	}
});
