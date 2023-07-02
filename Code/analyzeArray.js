function analyzeArray(arr) {
    return {
        average: getAvg(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length,
    };

    function getAvg(arr) {
        const avg = arr.reduce((prev, current) => (current + prev)) / arr.length;
        return avg;
    };

    function getMin(arr) {
        return Math.min(...arr);
    };

    function getMax(arr) {
        return Math.max(...arr);
    };
}

console.log(analyzeArray([2, 5, 9, 5, 3, 7, 5, 4]));

export default analyzeArray;