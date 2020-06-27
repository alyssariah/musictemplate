import React from "react"
import '../sass/Contact.sass'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phone: '', instrument: '', comments: '', formSent: false};
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleInstrument = this.handleInstrument.bind(this);
        this.handleComments= this.handleComments.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    componentDidMount() {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }
    handleName(event) {
        this.setState({name: event.target.value})
    }
    handleEmail(event) {
        this.setState({email: event.target.value})
    }
    handlePhone(event) {
        this.setState({phone: event.target.value})
    }
    handleInstrument(event) {
        this.setState({instrument: event.target.value})
    }
    handleComments(event) {
        this.setState({comments: event.target.value})
    }
    handleSubmit (event) {
        event.preventDefault()
        const templateId = 'music_lessons';
    
        this.sendFeedback(templateId, {comments: this.state.comments, name: this.state.name, email: this.state.email, phone: this.state.phone, instrument: this.state.instrument})
    }
    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'contact_service', templateId,
          variables
          ).then(res => {
            document.querySelector("form").reset()
            this.setState({formSent: true})
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    render() {
        return(
        <>
            {this.state.formSent && 
            <div className="confirmBox">
                <h5>
                    Your message has been sent! Check your email for a confirmation.
                    <button onClick={()=> this.setState({formSent: false})}>Ok</button>
                </h5>
            </div>}
            <div className="card">
                <h4>Contact Me</h4>
                <div className="row">
                <form>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="name" onChange={this.handleName} required/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="tel" name="phone" onChange={this.handlePhone} required/>
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="email" name="email" onChange={this.handleEmail} required/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="input-field select">
                    <select name="instrument" onChange={this.handleInstrument} required>
                        <option value="" disabled defaultValue></option>
                        <option value="Piano">Piano</option>
                        <option value="Guitar">Guitar</option>
                    </select>
                    <label htmlFor="instrument" className="instrument">Please choose your instrument</label>
                </div>
                <div className="row">
                    <div className="input-field">
                        <textarea name="comments" id="textarea1" className="materialize-textarea" onChange={this.handleComments}/>
                        <label htmlFor="comments">Additional Comments</label>
                    </div>
                </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
        </>
        )
    }
}
export default Contact