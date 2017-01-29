import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="content" alt="Ben's college experience.">
            <h1>College Life</h1>
            <p>
              I graduated from Texas A&M University as a member of the class of 2014, with a BS in Psychology and a 3.52 GPA. While I was at A&M, I was a involved in various leadership organizations, and even helped to co-found a service organizationcalled HEAT.
            </p>
        </div>
        <div className="content"  alt="Ben's work experience.">
            <h1>Past Work</h1>
            <p>
              After graduation, I worked as a Financial Guidance Consultant at Fidelity Investments. After a year on the job, I was offered a position as the Director of Sales and Customer Relations at the start-up digital marketing firm, Lyvly. Overall, I have ve worked for over 3 years in client-facing positions.
            </p>
        </div>

        <div className="content"  alt="Ben's current interests.">
            <h1>Current Interests</h1>
            <p>
              My current fascination lies in how code is beginning to converge with art. Not in the sense that someone will use an illustrator to create content, but instead that people who never saw themselves as artists are now able to create marvelous works with the power of JavaScript and CSS.
            </p>
        </div>
      </div>
    );
  }
}

export default About;
