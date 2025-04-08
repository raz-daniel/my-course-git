import './Noop.css'

export default function Noop(): JSX.Element {
    return (
        <div className='Noop'>
            <div>Noop</div>
            <div>Age: 6</div>
            <div>
                <img src="/noop.jpeg" alt="Noop"/>
            </div>
        </div>
    )
}