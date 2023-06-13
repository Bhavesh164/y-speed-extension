var video = document.querySelector('video');
video.playbackRate = video.playbackRate === 1 ? 2 : 1;

var speedButton = document.querySelector('.ytp-button ytp-settings-button');
if (speedButton) {
  speedButton.click();
  var speedPanel = document.querySelector('.ytp-panel-menu[role="menu"]');
  if (speedPanel) {
    var speedValue = speedPanel.querySelector('.ytp-menuitem[aria-checked="true"]');
    if (speedValue) {
      speedValue.textContent = video.playbackRate === 1 ? 'Normal' : video.playbackRate + 'x';
    }
    speedButton.click();
  }
}
