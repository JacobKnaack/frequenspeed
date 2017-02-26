'use strict';

module.exports = function batchPitches(normalizePitch, pitchBatchTime, timeLimit) {

    window.currentPitch = window.currentPitch || 0;
    window.pitchArr = window.pitchArr || [];

    // Batch Pitches

    var batchPitches = window.setInterval(function() {
        window.currentPitch = parseInt(normalizePitch(window.pitchArr)).toFixed(0);
        // Reset pitchArr
        window.pitchArr = [0];
        console.log(window.currentPitch);
    }, pitchBatchTime);

    // Clear pitches after given time
    window.setTimeout(function() {
        window.clearInterval(batchPitches);
    }, timeLimit);

};
