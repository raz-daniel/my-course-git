export default class ArrayOperation {
    static getSum(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }
    static getAvg(arr) {
        const sum = arr.reduce((sum, num) => sum + num, 0);
        return sum / arr.length;
    }
    static getMax(arr) {
        let max = 0;
        return arr.find(num => num > max ? max = num : max = max);
    }
    static getMin(arr) {
        const max = Infinity;
        return arr.find(num => num < max ? num : max);
    }
}
