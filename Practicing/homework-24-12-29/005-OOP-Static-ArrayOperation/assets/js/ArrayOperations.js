export default class ArrayOperations {
    static getSum(array) {
        return array.reduce((sum, num) => sum + num, 0);
    }
}
