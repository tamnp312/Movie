import React from 'react'
import { Link } from 'react-router-dom'

const AuthScreen = () => {
  return (
    <div className='hero-bg relative'> 
        <header className='max-w-6xl mx-auto flex justify-between items-center p-4 pb-10'>
            <Link to={"/"}>
            <img src="/netflix-logo.png" alt="Netflix Logo" className="w-52" />
            </Link>

            <Link to={"/login"} className="bg-red-500 px-4 py-2 text-white font-semibold rounded">
                Login       
            </Link>
        </header>
    </div>
  )
}

export default AuthScreen