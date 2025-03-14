import React from 'react'
import { useAuthStore } from '../../store/authUser'

const HomeScreen = () => {

  const {signout} = useAuthStore()

  const handleLogout = () => {
    signout();
  }
  return (
    <div>
      <h1>HomeScreen</h1>
      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default HomeScreen