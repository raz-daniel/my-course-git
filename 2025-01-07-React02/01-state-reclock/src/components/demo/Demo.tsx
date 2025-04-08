import { useEffect, useState } from 'react';
import './Demo.css'

export default function Demo(): JSX.Element {
    
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {

        const interval = setInterval(() => {
            console.log(`setting time...`)
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)

    }, [])


    
    

    return (
        <div className='Demo'>
            <p>time is {time}</p>
        </div>
    )
}