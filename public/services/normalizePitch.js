'use strict';

module.exports = function normalizePitch(pitchArr) {

    var maxHz = 1200;

    return getVocalMedian(pitchArr);

    function getVocalMedian(arr) {
        let values = arr;
        values.sort((a, b) => a - b);
        values = values.filter(function(e) {
            // Ignore values above 1200 Hz
            return e < maxHz;
        });
        let lowMiddle = Math.floor((values.length - 1) / 2);
        let highMiddle = Math.ceil((values.length - 1) / 2);
        let median = (values[lowMiddle] + values[highMiddle]) / 2;
        return median;
    }

}
