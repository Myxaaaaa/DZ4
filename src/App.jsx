import React, { useState, useEffect } from 'react'
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  const [user, setUser] = useState({ name: '', lastname: '' })
  const [isAuthorized, setIsAuthorized] = useState(null)

  useEffect(() => {
    const name = prompt('Как вас зовут?')
    const lastname = prompt('Какая у вас фамилия?')
    
    const userData = { name, lastname }
    setUser(userData)

    if (name === 'John' && lastname === 'Johns') {
      setIsAuthorized(true)

    } else {
      setIsAuthorized(false)
    }
  }, [])

  if (isAuthorized === null) {
    return <div>Loading...</div>
  }

  return isAuthorized ? <MainPage user={user} /> : <ErrorPage user={user} />
}

export default App
