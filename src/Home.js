import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
   
    return (
        <div className="home-page">
            <h2>Test</h2>
            <Link to="/sign-in">Sign-in</Link>
            <Link to="/sign-up">Sign-Up</Link>
        </div>
    )
}

export default Home
