'use strict';

window.onload = function() {

    var sceneEl = document.querySelector('a-scene');

    // Duplicate Track for opponent
    var planeEls = document.querySelectorAll('a-plane');

    Array.prototype.forEach.call(planeEls, function(e) {
        // Clone Node so not to overwrite orignal planes
        e = e.cloneNode(true);
        var positionArr = e.getAttribute('position').split(' ')
        positionArr[0] = -10;

        e.setAttribute('position', positionArr.join(' '));
        sceneEl.appendChild(e);

    })


    // Create Opponent Avatar

    // Move Opponenet

    // Create Light trail behind opponent

};

