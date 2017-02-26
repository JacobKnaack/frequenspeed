'use strict'

var cameraSpeedInterval = window.setInterval( function() {
  let camera = document.querySelector('#cameraWrapper')
  camera.setAttribute('wasd-controls', `acceleration: ${window.currentPitch * 5}; easing: 25`)
  console.log(camera.components.position.attrValue.z);
  if(camera.components.position.attrValue.z <= -1100) {
    console.log(camera);
    camera.setAttribute('wasd-controls', 'enabled: false')
    camera.setAttribute('wasd-controls', 'acceleration: 0')
    window.clearInterval(cameraSpeedInterval)
  }
}, 250)

window.setTimeout(function() {
  window.clearInterval(cameraSpeedInterval)
}, 30000)
