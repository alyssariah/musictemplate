import React from "react"
import '../sass/Contact.sass'

class Contact extends React.Component {
    render() {
        return(
        <>
            <div className="card">
                <h4>Contact Me</h4>
                <form method="post" action="Contact.php" enctype="text/plain">
                    <input type="text" name="name" id="name" required/>
                    <label for="name">Name</label>
                    <input type="tel" name="phone"required/>
                    <label for="phone">Phone Number</label>
                    <input type="email" name="email" required/>
                    <label for="email">Email</label>
                    <label for="instrument" className="instrument">Please Choose an Instrument</label>
                    <select name="instrument" required>
                        <option value=""></option>
                        <option value="Piano">Piano</option>
                        <option value="Guitar">Guitar</option>
                    </select>
                    <label for="comments">Additional Comments</label>
                    <textarea name="comments"/>
                    <button>Submit</button>
                </form>
            </div>
        </>
        )
    }
}
export default Contact