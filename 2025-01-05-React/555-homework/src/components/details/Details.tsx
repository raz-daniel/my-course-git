import './Details.css'
import myPhoto from '../../assets/images/MyPhoto.jpg'
import familyPhoto from '../../assets/images/FamilyPhoto.jpg'
import stupidityPhoto from '../../assets/images/StupidityPhoto.jpeg'
import { useEffect, useState } from 'react'



export default function Details(): JSX.Element {

  const myPhotos = [myPhoto, familyPhoto, stupidityPhoto]
  const [currentPhoto, setCurrentPhoto] = useState<string>(
    myPhotos[Math.floor(Math.random() * myPhotos.length)]
  )
  

  function getRandomPhoto(): string {  
    try {
      let newPhoto = currentPhoto
      while (newPhoto === currentPhoto) {
        newPhoto = myPhotos[Math.floor(Math.random() * myPhotos.length)]
      }
      return newPhoto
    } catch (error) {
      console.error('Error loading Photo:', error)
      return myPhoto
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto(getRandomPhoto())
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='Details'>
      <h2>Who Am I?</h2>
      <p>Independent Chinese Practitioner</p>
      <p>Full Stack Development Student</p>
      <p>And much more...</p>
      <img src={currentPhoto} alt='Profile'></img>
    </div>
  )
}


