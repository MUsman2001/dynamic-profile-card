import { useState } from 'react'
import { userData } from './components/users'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {

  const [profiles, setProfiles] = useState(userData);
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");


  const handleFollow = (id) => {
    const updatedProfiles = profiles.map((user) => {
      if(user.id === id){
        return {...user, isFollowed: !user.isFollowed}
      }
      return user;
    });
    setProfiles(updatedProfiles);
  }

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <h1>User Profiles</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'light' : 'dark'} Mode
      </button>
      <input type="text" placeholder='Search users...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <div className='profile-container'>
        {profiles.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
          <ProfileCard key={user.id} user={user} onToggleFollow={handleFollow} darkMode={darkMode} />
        ))}
      </div>
    </div>
  )
}

export default App
