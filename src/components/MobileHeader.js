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
            <a data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i><i className="fas fa-music"></i></a>
            <h4>Alyssa's Music Studio</h4>
            <div className="container">
                <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                    <div className="background">
                        <img src="https://images.unsplash.com/photo-1540593463874-59835505e99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"/>
                    </div>
                    <a href="#user"><img className="circle" src=""/></a>
                    <a href="#name"><span className="black-text name">Music Lessons <br/> alyssastudio@gmail.com</span></a>
                    {/* <a href="#email"><span className="black-text email">alyssastudio@gmail.com</span></a> */}
                    </div>
                </li>
                    <li><Link to='/' className="sidenav-close">Home</Link></li>
                    <li><Link to='/about' className="sidenav-close">About</Link></li>
                    <li><a onClick={dropDown}className="lessons">Lessons<i className="fas fa-caret-down"/></a></li>
                    <li className={this.state.dropdown? "show": "hidden"}><Link to='/lessons' className="sidenav-close" id="piano">Piano Lessons</Link></li>
                    <li className={this.state.dropdown? "show": "hidden"}><Link to='/lessons' className="sidenav-close" id="guitar">Guitar Lessons</Link></li>
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