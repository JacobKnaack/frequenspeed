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

    // Move Opponenet
    var enemyWrapper = document.getElementById('enemyWrapper');
    var enemyAnimation = enemyWrapper.querySelectorAll('a-animation');


    function moveOpponent(timeLimit, enemyAnimation, enemyCycle, enemyLightTrail) {
        Array.prototype.forEach.call(enemyAnimation, function(e) {

            e.setAttribute('to', '-9.5 1 -2000');
            e.setAttribute('dur', 35000)

        })

    }


    // Listen for gameStart Event
    document.addEventListener('gameStart', function (e) {
        console.log('gameStarted for Enemy');
        moveOpponent(e.timeLimit, enemyAnimation, enemyCycle, enemyLightTrail)



    }, false);


};

