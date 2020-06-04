import React from "react"
import {Link} from 'react-router-dom'
import '../sass/Header.sass'

class Header extends React.Component {
    render() {
        return(
        <>
            <h1 className="topHeader">Music Lessons</h1>
            <nav id="fullNav">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/lessons'>Lessons</Link>
                <Link to='/policies'>Policies</Link>
                <Link to='/perform'>Perform</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </>
        )
    }
}
export default Header