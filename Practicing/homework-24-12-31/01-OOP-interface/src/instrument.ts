export default abstract class Instrument {
    
    protected constructor (
        protected model: string,
        protected manufacturer: string,
        protected color: string
    ) {

    }

    protected abstract display(): void

    protected abstract makeSound(): void

}