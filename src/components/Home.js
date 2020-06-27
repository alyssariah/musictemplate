import React from "react"
import '../sass/Home.sass'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
        <>
            <div className="card">
                <h4>Music Lessons at Alyssa's Studio</h4>
                <p>“I think music in itself is healing. It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.” ― Billy Joel</p>
                <img src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="hands playing guitar"/>
                <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h6>
                <img className="homepic" src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="hands playing piano"/>
                <ul className="goals" id="goals">
                    <li>Creativity &amp; Improvisation</li>
                    <li>Understanding of theory, technique, and rhythm</li>
                    <li>Customized lessons to fit your interests</li>
                    <li>Opportunities to share music with others: duets and performances</li>
                    <li>My mission is to provide students with the right tools, feedback, environment, and performance opportunities so they can enjoy and express themselves through music.</li>
                </ul>
                <h6>Students have the opportunity to <Link to="/perform">perform</Link> at recitals and other unique settings such as nursing homes.</h6>
                <h6><Link to="/lessons">Classes</Link> involve a blend of learning technical pieces, practicing theory, experimenting with improvisation, and customized musical material fit for their interests.</h6>
                <h6>Please see the <Link to="/policies">student handbook</Link> to learn more about student policies.</h6>
                <h6>Ready to sign up for classes?</h6>
                <Link to="/contact"><button>Let's Get Started!</button></Link>
            </div>
        </>
        )
    }
}
export default Home
