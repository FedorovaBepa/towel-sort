// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null || matrix.length == 0) {
        return [];
    } else {
        return matrix.flatMap((arr, i) => (i % 2 ? [...arr].reverse() : arr));
    }
};
