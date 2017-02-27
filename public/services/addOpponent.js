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
    var enemyCycle = document.getElementById('enemyCycle');

    // Create Light trail behind opponent
    var enemyLightTrail = document.getElementById('enemyLightTrail');
    var enemyLightTrailPosAnimation = document.getElementById('enemyLightTrailPosAnimation');
    var enemyLightTrailDepthAnimation = document.getElementById('enemyLightTrailDepthAnimation');


    // Move Opponenet
    var enemyWrapper = document.getElementById('enemyWrapper');
    var enemyCyclePosAnimation = document.getElementById('enemyCyclePosAnimation');

    // console.log(enemyCycle.components.position.attrValue.z);


    function moveOpponent(timeLimit, enemyCyclePosAnimation, enemyCycle, enemyLightTrail) {
        enemyCyclePosAnimation.setAttribute('to', '-9.5 1 -1200');
        enemyCyclePosAnimation.setAttribute('dur', 35000)


        enemyLightTrailPosAnimation.setAttribute('to', '-9.5 1 0');
        enemyLightTrailPosAnimation.setAttribute('dur', 35000);

        enemyLightTrailDepthAnimation.setAttribute('to', 2400);
        enemyLightTrailDepthAnimation.setAttribute('dur', 35000);

    }


    // Listen for gameStart Event
    document.addEventListener('gameStart', function (e) {
        console.log('gameStarted for Enemy');
        moveOpponent(e.timeLimit, enemyCyclePosAnimation, enemyCycle, enemyLightTrail)



    }, false);


};

