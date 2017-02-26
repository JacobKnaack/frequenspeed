'use strict'

var cameraSpeedInterval = window.setInterval( function() {
  let camera = document.querySelector('#cameraWrapper')
  camera.setAttribute('wasd-controls', `acceleration: ${window.currentPitch * 5}; easing: 30`)
  console.log(camera);
}, 250)

window.setTimeout(function() {
  window.clearInterval(cameraSpeedInterval)
}, 30000)
