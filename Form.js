// JavaScript source code
import React, { Component } from 'react'
 class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            password: "",

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${ this.state.firstName } ${ this.state.lastName } Registered Successfully!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: "",

        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>USER REGISTRATION</h1>
                    <label>FirstName :</label><br></br>
                    <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName...." /><br></br>
                    <label>LastName :</label><br></br>
                    <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="lasttName...." /><br></br>
                    <label> Password :</label><br></br>
                    <input type="text" value={this.state.password} onChange={this.passhandler} placeholder="password...." /><br></br>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Form;