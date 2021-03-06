import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return array.reduce(reducer);
}

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let sorted = array.sort(function(a, b){return a - b});
    if(sorted.length % 2 == 0){
        return (sorted[(sorted.length)/2]+sorted[(sorted.length)/2-1])/2;
    } else {
        return sorted[(sorted.length - 1)/2];
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let min = Math.min(...array);
    let median = getMedian(array);
    let max = Math.max(...array);
    let meann = array.reduce((a,b) => a+b) / array.length;
    let variancee = variance(array, meann);
    let length = array.length;
    let sum = getSum(array);
    let standard_deviation = Math.sqrt(variancee);

    return {
        "length": length,
        "sum": sum,
        "mean": meann,
        "median": median,
        "min": min,
        "max": max,
        "variance": variancee,
        "standard_deviation": standard_deviation
       }
}

