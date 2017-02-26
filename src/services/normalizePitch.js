'use strict';

module.exports = function normalizePitch(pitchArr) {

    return getVocalMedian(pitchArr);

    function getVocalMedian(arr) {
        let values = arr;
        values.sort((a, b) => a - b);
        values = values.filter(function(e) {
            // Ignore values above 1200 Hz
            return e < 1200;
        });
        let lowMiddle = Math.floor((values.length - 1) / 2);
        let highMiddle = Math.ceil((values.length - 1) / 2);
        let median = (values[lowMiddle] + values[highMiddle]) / 2;
        return median;
    }

}
