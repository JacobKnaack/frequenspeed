'use strict';

var pitchDetect = require('./services/pitchDetect.js');
var normalizePitch = require('./services/normalizePitch.js');
var batchPitches = require('./services/batchPitches.js');

// Game time limit in ms
var timeLimit = 30000;

// Number of ms between collecting pitches
var msBetweenPitches = 5;

// Timeframe to batch pitches (e.g. collect batch every second) in ms
var pitchBatchTime = 250;

// Begin Pitch Detection
pitchDetect(msBetweenPitches, timeLimit);
batchPitches(normalizePitch, pitchBatchTime, timeLimit);

// Update Camera Speed from Pitch
var cameraSpeedInterval = window.setInterval( function() {
  let camera = document.querySelector('#cameraWrapper');
  camera.setAttribute('wasd-controls', `acceleration: ${window.currentPitch * 5}; easing: 50`);
  console.log(camera.components.position.attrValue.z);
  if(camera.components.position.attrValue.z <= -1100) {
    console.log(camera);
    camera.setAttribute('wasd-controls', 'enabled: false');
    camera.setAttribute('wasd-controls', 'acceleration: 0');
    window.clearInterval(cameraSpeedInterval);
  }
}, pitchBatchTime);

// Stop updating speed when time runs out
window.setTimeout(function() {
  window.clearInterval(cameraSpeedInterval);
}, timeLimit);
