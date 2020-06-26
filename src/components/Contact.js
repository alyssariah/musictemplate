import React from "react"
import '../sass/Contact.sass'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Contact extends React.Component {
    componentDidMount() {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }
    render() {
        return(
        <>
            <div className="card">
                <h4>Contact Me</h4>
                <div className="row">
                <form method="post">
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="name" id="name" required/>
                        <label for="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="tel" name="phone"required/>
                        <label for="phone">Phone Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="email" name="email" required/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="input-field select">
                    <select name="instrument" required>
                        <option value=""disabled selected></option>
                        <option value="Piano">Piano</option>
                        <option value="Guitar">Guitar</option>
                    </select>
                    <label for="instrument" className="instrument">Please choose your instrument</label>
                </div>
                <div className="row">
                    <div className="input-field">
                        <textarea name="comments" id="textarea1" className="materialize-textarea"/>
                        <label for="comments">Additional Comments</label>
                    </div>
                </div>
                    <button>Submit</button>
                </form>
                </div>
            </div>
        </>
        )
    }
}
export default Contact