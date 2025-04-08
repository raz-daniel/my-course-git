export default class ArrayOperations {
    
    static getSum(array: number[]):number {
        return array.reduce((sum, num) => sum + num,0)
    }
    
}