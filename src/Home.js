
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
   const  [userInfo, setUserInfo] = useState({});

    let x = JSON.parse(localStorage.getItem('userData'))
    let login = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(()=>{
       const user = x.find((item) => item.Email === login.Email)
        setUserInfo(user)
    },[login])
    
    return (
        <div className="home-page">
            <h2>{userInfo.Name}</h2>
            <Link to="/sign-in">Sign-in</Link>
            <Link to="/sign-up">Sign-Up</Link>
        </div>
    )
}

export default Home
