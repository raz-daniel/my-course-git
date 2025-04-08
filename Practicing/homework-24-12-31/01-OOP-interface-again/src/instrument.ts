export default abstract class Instrument {

    protected constructor (
        protected model: string,
        protected manufacturer: string,
        protected color: string,
    ) {}

    abstract display(): void
    abstract makeSound(): void
}