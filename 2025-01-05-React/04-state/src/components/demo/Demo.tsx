import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo(): JSX.Element {
    
let startTime = useRef<string>(new Date().toLocaleTimeString())
const [currentTime, setCurrentTime] = useState<string>(startTime.current)

useEffect(() => {
    const intervalId = setInterval(() => {
        console.log('modify time')
        setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
        clearInterval(intervalId)
    }
}, [])

    return (
        <div className='Demo'>
            <p>Start Time: {startTime.current}</p>
            <p>current time: {currentTime}</p>
        </div>
    )
}