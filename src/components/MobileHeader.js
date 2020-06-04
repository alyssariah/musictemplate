import React from "react"
import {Link} from 'react-router-dom'
import '../sass/MobileHeader.sass'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class MobileHeader extends React.Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
      }
    render() {
        return(
        <nav id="nav">
            <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
            <i class="fas fa-music"></i>
            <div className="container">
                <ul id="slide-out" class="sidenav">
                <li>
                    <div className="user-view">
                    <div className="background">
                        <img src="https://images.unsplash.com/photo-1540593463874-59835505e99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"/>
                    </div>
                    <a href="#user"><img className="circle" src="https://images.unsplash.com/photo-1540593463874-59835505e99d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"/></a>
                    <a href="#name"><span className="black-text name">Music Lessons</span></a>
                    <a href="#email"><span className="black-text email">alyssastudio@gmail.com</span></a>
                    </div>
                </li>
                    <li><Link to='/' className="sidenav-close">Home</Link></li>
                    <li><Link to='/about' className="sidenav-close">About</Link></li>
                    <li><Link to='/lessons' className="sidenav-close">Lessons</Link></li>
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