import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
    let x = JSON.parse(localStorage.getItem('userData'))
    let name = x.Name;
    return (
        <div className="home-page">
              
            <Link to="/sign-in">{name}</Link>
            <Link to="/sign-up">Sign-Up</Link>
        </div>
    )
}

export default Home
