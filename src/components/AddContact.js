import React from 'react'
import './App.css'
// add contact Form 
// Using it we are going to add contact in the list of contacts

class AddContact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: ""
    }
  }

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("Fill The Details on priority")
      return;
    }
    this.props.addContactHandler(this.state);
    // clearing the state after submiting contact details
    this.setState({ name: "", email: "" })
  };


  render() {

    return (
      <div className='addContact_container'>
        <h2>Add Contact</h2>

        <form onSubmit={this.add}>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" value={this.state.name} name='name' placeholder='Enter name' onChange={(e) => this.setState({ name: e.target.value })} />
          </div>

          <div className="field">
            <label htmlFor="email">Email ID</label>
            <input type="email" value={this.state.email} name='email' placeholder='Enter email' onChange={(e) => this.setState({ email: e.target.value })} />
          </div>

          <button className='btn' type='submit'>Add</button>

        </form>

      </div>
    )
  }
}
export default AddContact;