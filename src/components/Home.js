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
                <img src="https://images.unsplash.com/photo-1503671420638-0301955fc0d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80" alt="hands playing guitar"/>
                <ul style={{listStyleType: "circle"}} className="goals">
                    <li>Creativity &amp; Improvisation</li>
                    <li>Understanding of theory, technique, and rhythm</li>
                    <li>Customized lessons to fit your interests</li>
                    <li>Opportunities to share music with others: duets and performances</li>
                    <li>My mission is to provide students with the right tools, feedback, environment, and performance opportunities so they can enjoy and express themselves through music.</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1579685055980-48dd748d862e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="hands playing piano"/>
                <h6 className="clearfix">Students have the opportunity to <Link to="/perform">perform</Link> at recitals and other unique settings such as nursing homes.</h6>
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
