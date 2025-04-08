export default class ArrayOperation {

    static getSum(arr: number[]): number {
        return arr.reduce((sum, num) => sum + num ,0)
    }

    static getAvg(arr: number[]): number {
        const sum = arr.reduce((sum, num) => sum + num ,0)
        return sum / arr.length
    }

    static getMax(arr: number[]): number {
        let max = 0;
        return arr.find(num => num > max? max = num: max = max)
    }

    static getMin(arr: number[]): number {
        const max = Infinity;
        return arr.find(num => num < max? num : max)
    }
}