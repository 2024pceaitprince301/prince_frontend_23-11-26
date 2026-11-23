import { useState } from 'react'
import './App.css'

function App() {
  const [following, setFollowing] = useState(false)
  const skills = ['HTML', 'CSS', 'JavaScript', 'Git']

  return (
    <div className="card">
      <div className="banner"></div>
      <div className="avatar">AK</div>

      <h2>Arjun Kumar</h2>
      <p className="role">Web Developer</p>

      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <p className="followers">{following ? 121 : 120} followers</p>

      <button
        className={`follow-btn ${following ? 'following' : ''}`}
        onClick={() => setFollowing((current) => !current)}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default App