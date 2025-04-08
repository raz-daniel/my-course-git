import './Skills.css'

export default function Skills(): JSX.Element {

  const mySkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap', 'jQuery']

  return (
    <div className='Skills'>
      <h2>Professionals</h2>
      <ul className='ulSkills'>
        {mySkills.map(skill => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </div>
  )
}


