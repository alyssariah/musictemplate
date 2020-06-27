import React from "react"
import {Link} from 'react-router-dom'
import '../sass/MobileHeader.sass'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class MobileHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dropdown: false}
    }
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
    render() {
        const dropDown = () => {
            this.setState({dropdown: !this.state.dropdown})
        }
        return(
        <nav id="nav">
            <p data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></p>
            <div className="container">
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                        <div className="background">
                            <img src="https://images.unsplash.com/photo-1571974599782-87624638275e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt="piano keyboard background"/>
                        </div>
                        <a className="heading" href="#name"><span className="black-text name">Alyssa's Music Studio <br/> alyssastudio@gmail.com</span></a>
                        </div>
                    </li>
                    <li><Link to='/' className="sidenav-close">Home</Link></li>
                    <li><Link to='/about' className="sidenav-close">About</Link></li>
                    <li><Link to="/lessons" onClick={dropDown}className="lessons">Lessons <i className="fas fa-caret-down"/></Link></li>
                    <li className={this.state.dropdown? "show": "hidden"}><Link to='/lessons' className="sidenav-close" id="piano" onClick={()=>this.props.setInstrument("Piano")}>Piano Lessons</Link></li>
                    <li className={this.state.dropdown? "show": "hidden"}><Link to='/lessons' className="sidenav-close" id="guitar" onClick={()=>this.props.setInstrument("Guitar")}>Guitar Lessons</Link></li>
                    <li><Link to='/policies' className="sidenav-close">Policies</Link></li>
                    <li><Link to='/perform' className="sidenav-close">Perform</Link></li>
                    <li><Link to='/contact' className="sidenav-close">Contact</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}
export default MobileHeader