import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className='about-header'>
          <h1>Hey, I'm Ben.</h1>
        </div>
        <div className='about-content'>
          <p>
            I'm a former Co-Founder turned Front-End Developer. I pride myself in writing code that is modern, reusable, and accessible. I enjoy creating projects that are both minimal and beautiful, allowing the user to find joy in the subtleties of the design. I thrive on the constant rush and frustration of exploring new, cutting edge languages and frameworks, as I continue down the path of becoming a better developer.
          </p>
          <p>
            I currently reside in Dallas, Texas, but have an undying impulse to travel that keeps me moving around as often my bank account allows. When I'm not coding or traveling, you can find me around live music, managing rappers, attempting to get to the gym, or aimlessly roaming the internet.
          </p>
          <p>
            If you'd like to know more, feel free to reach out to me in whichever way feels most comfortable.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
