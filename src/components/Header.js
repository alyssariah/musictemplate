import React from "react"
import {Link} from 'react-router-dom'
import '../sass/Header.sass'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends React.Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 0, outDuration: 0});
    }
    render() {
        return(
        <>
            <h1 className="topHeader">Alyssa's Music Studio</h1>
            <nav id="fullNav" className="sticky">
                <ul id="dropdown1" className="dropdown-content">
                    <Link to='/lessons' data-target="dropdown1">Lessons<i className="material-icons right">arrow_drop_down</i></Link>
                    <li><Link to='/lessons' onClick={()=>this.props.setInstrument("Piano")}>Piano Lessons</Link></li>
                    <li className="divider"></li>
                    <li><Link to='/lessons' onClick={()=>this.props.setInstrument("Guitar")}>Guitar Lessons</Link></li>
                </ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <a className="dropdown-trigger" href="#!" data-target="dropdown1">Lessons<i className="material-icons right">arrow_drop_down</i></a>
                <Link to='/policies'>Policies</Link>
                <Link to='/perform'>Perform</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </>
        )
    }
}
export default Header