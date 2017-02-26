'use strict';

var pitchDetect = require('./services/pitchDetect.js');
var normalizePitch = require('./services/normalizePitch.js');
var batchPitches = require('./services/batchPitches.js');

// Game time limit in ms
var timeLimit = 30000;
// Number of ms between pitches collected
var msBetweenPitches = 5;
// Timeframe to batch pitches (e.g. collect batch every second) in ms
var pitchBatchTime = 250;

pitchDetect(msBetweenPitches, timeLimit);
batchPitches(normalizePitch, pitchBatchTime, timeLimit);


var cameraSpeedInterval = window.setInterval( function() {
  let camera = document.querySelector('#cameraWrapper');
  camera.setAttribute('wasd-controls', `acceleration: ${window.currentPitch * 5}; easing: 25`);
  console.log(camera.components.position.attrValue.z);
  if(camera.components.position.attrValue.z <= -1100) {
    console.log(camera);
    camera.setAttribute('wasd-controls', 'enabled: false');
    camera.setAttribute('wasd-controls', 'acceleration: 0');
    window.clearInterval(cameraSpeedInterval);
  }
}, 250);

window.setTimeout(function() {
  window.clearInterval(cameraSpeedInterval);
}, 30000);
