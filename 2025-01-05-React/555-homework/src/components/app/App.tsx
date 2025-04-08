import Details from '../details/Details.tsx'
import Header from '../header/Header.tsx'
import Skills from '../skills/Skills.tsx'
import './App.css'

export default function App(): JSX.Element {
  
  return (
    <div className='App'>
      <Header />
      <div>
        <Details />
        <Skills />
      </div>
    </div>
    
  )  
}


