import React, { Component } from 'react';
import axios from 'axios';

class Feedback extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      feedback: '',
    }
    this.handleSetFirst = this.handleSetFirst.bind(this);
    this.handleSetLast = this.handleSetLast.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  handleSetFirst(e) {
    this.setState({firstName: e.target.value});
  }
  handleSetLast(e) {
    this.setState({lastName: e.target.value});
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  handleComment(e) {
    this.setState({feedback: e.target.value});
  }
  sendFeedback(e) {
    e.preventDefault();
    const commentSave = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      feedback: this.state.feedback,
    };
    axios.post('http://localhost:8000/', commentSave)
    .catch((err) => {
      console.log({'error': 'error'});
    });
    this.setState({ 
      firstName: '',
      lastName: '',
      email: '',
      feedback: '', });
  }
 
  render() {
    return(
      <div>
        Directly message me?
        <form className='feedbackForm'>
          First Name:<br />
          <input 
            type='text'
            onChange={this.handleSetFirst}
            placeholder='First Name'
            value={this.state.firstName}
          /> <br />

          Last Name:<br />
          <input 
            type='text'
            onChange={this.handleSetLast}
            placeholder='Last Name'
            value={this.state.lastName}
          /> <br />

          Email Address:<br />
          <input 
            type='text'
            onChange={this.handleEmail}
            placeholder='Email Address'
            value={this.state.email}
          /> <br />

          Comment:<br />
          <textarea 
            type='text' 
            id='feedbackBox'
            onChange={this.handleComment}
            placeholder='Comment'
            value={this.state.feedback}
          /> <br />

          <button
            onClick={this.sendFeedback}
          >
          Send!</button>
        </form>
      </div>
    );
  }
}

export default Feedback;