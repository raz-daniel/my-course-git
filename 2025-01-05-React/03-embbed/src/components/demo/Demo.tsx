import './Demo.css'
import squirlImage from '../../assets/images/images.jpeg'

export default function Demo(): JSX.Element {
    //primitives
    const name = 'Daniel'
    const age = 22
    const isAdult = true
    const grades = [70, 80, 90]

    const dogs = [
        {
            id: 1,
            name: 'cheif',
            age: 6
        },
        {   
            id: 2,
            name: 'noop',
            age: 5
        }
    ]

    function sayHi() {alert(`Hi`)}
    return (
        <div className='Demo'>
            <p>Hello {name}</p>
            <p>You are {age} years old</p>
            <p>You are an {isAdult? 'adult': 'child'}</p>
            <p>your grades are:</p>
            <ul>
                {grades.map((grade, index) => <li key={index}>{grade}</li>)}
            </ul>
            <button onClick={sayHi}>Say Hi</button>
            <p>Dogs:</p>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {dogs.map(({id, name, age}) => <tr key={id}>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>)}
                </tbody>
            </table>
            <img src={squirlImage}></img>
        </div>
    )
}