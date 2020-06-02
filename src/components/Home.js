import React from "react"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lessons: "",
            date: new Date()
        }
    }
    tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        console.log(this.state.date)
        return(
        <>
            <h1>{this.state.lessons}</h1>
            <p>{this.state.date.toLocaleDateString()}</p>
        </>
        )
    }
}
export default Home
