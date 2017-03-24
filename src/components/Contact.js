import React from 'react';
import '../styles/Contact.css';
import github from '../images/github.svg'
import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'


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
        <div className='contact-header'>
          <h1>Get In Touch</h1>
        </div>
        <div className='contact-container'>
          <div className='social-container'>
            <h1 className='reach-me'>You can reach me at:</h1>
            <a href="https://www.linkedin.com/in/benjamin-godfrey-21423791?trk">
              <img
                className='social-icon linkedin'
                src={linkedIn}
                alt='Ben on LinkedIn'
              />
              <h4>LinkedIn</h4>
            </a>
            <a href="https://github.com/bcgodfrey91">
              <img
                className='social-icon github'
                src={github}
                alt='Ben on Github'
              />
              <h4>Github</h4>
            </a>
            <a href="https://twitter.com/BenTheHuman">
              <img
                className='social-icon twitter'
                src={twitter}
                alt='Ben on Twitter'
              />
              <h4>Twitter</h4>
            </a>
            <a href="https://www.instagram.com/based_godfrey">
              <img
                className='social-icon instagram'
                src={instagram}
                alt='Ben on Instagram instagram'
              />
              <h4>Instagram</h4>
            </a>
          </div>
          <div className='contact-form-container'>
            <form
              action="https://formspree.io/bcgodfrey91@gmail.com"
              method="POST"
              className='contact-form'
            >
              <input
                onKeyUp={(e)=>this.nameField(e)}
                className='form-input name'
                placeholder='Name'
                type="text"
                name="name"
              />
              <input
                onKeyUp={(e)=>this.emailField(e)}
                className='form-input email'
                placeholder='Email'
                type="email" name="_replyto"
              />
              <textarea
                onKeyUp={(e)=>this.messageField(e)}
                className='form-message'
                placeholder={`What's Up?`}
                type='text'
                name="message"
              >
              </textarea>
              <input
                className="form-button submit"
                type="submit"
                value="Send"
                disabled={this.enableSubmit()}
              />
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
