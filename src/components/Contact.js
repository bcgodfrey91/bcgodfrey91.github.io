import React from 'react';

class Contact extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  nameField(e) {
    this.setState({name: e.target.value});
  }

  emailField(e) {
    this.setState({email: e.target.value});
  }

  messageField(e) {
    this.setState({message: e.target.value});
  }

  enableSubmit() {
    if (this.state.name === '' ||
        this.state.email.indexOf('@') === -1 ||
        this.state.message === '') {
      return true;
    }
  }

  render() {
    return (
      <section id='contact'>
        <h1 className='contact-header'>Contact me</h1>
        <div className='social-wrapper'>
          <h1>Social</h1>
        </div>
        <div className='contact-form'>
          <form action="https://formspree.io/bcgodfrey91@gmail.com"
            method="POST">
            <input onKeyUp={(e)=>this.nameField(e)} className='name'
            placeholder='Your Name' type="text" name="name"/>
            <input onKeyUp={(e)=>this.emailField(e)} className='email'
            placeholder='Your Email' type="email" name="_replyto"/>
            <textarea onKeyUp={(e)=>this.messageField(e)} className='message'
            placeholder='Message' type='text' name="message"></textarea>
            <input className="submit" type="submit" value="Send"
            disabled={this.enableSubmit()} />
            <h1>{this.state.name}</h1>
            <h1>{this.state.email}</h1>
            <h1>{this.state.message}</h1>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;
