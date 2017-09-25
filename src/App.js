import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul id='navbar'>
            <li><a href="#welcome-section">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div id="welcome-section" className="intro">
          <h1>Jesh</h1>
          <p>A Wandering Programmer</p>
        </div>

        <div id="projects" className="work">
          <h2 className="work-header">Some interplanetary work</h2>
          <a 
            className="workExample"
            href='https://codesandbox.io/embed/m9z60prv3y?module=%2FApp.js&view=preview' 
            target="_blank">
            FuzzyClock <br />
            <a href='https://github.com/jeshsy/fuzzyClock' className="yellowFont"> Github link</a>
          </a>
          <a 
            className="workExample"
            href='https://codesandbox.io/embed/m9z60prv3y?module=%2FApp.js&view=preview' 
            target="_blank">
            FuzzyClock <br />
            <a href='https://github.com/jeshsy/fuzzyClock' className="yellowFont"> Github link</a>
          </a>
          <a 
            className="workExample"
            href='https://codesandbox.io/embed/m9z60prv3y?module=%2FApp.js&view=preview' 
            target="_blank">
            FuzzyClock <br />
            <a href='https://github.com/jeshsy/fuzzyClock' className="yellowFont"> Github link</a>
          </a>
          <a 
            className="workExample"
            href='https://codesandbox.io/embed/m9z60prv3y?module=%2FApp.js&view=preview' 
            target="_blank">
            FuzzyClock <br />
            <a href='https://github.com/jeshsy/fuzzyClock'className="yellowFont"> Github link</a>
          </a>
{/*          <a href="https://codepen.io/FreeCodeCamp/pen/NNvBQW" target="_blank" className="project project-tile">
            <img className="project-pic" src="https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png" alt="project">
            <div className="project-title">Tribute Page</div>
          </a> */}
        </div>


        <div id="contact" className="contact">
          <div className="header">
            <h1>Send some lunar mail?</h1>
            <p>Light speed delivery</p>
          </div>
          <div className="contactContainer">
            <Feedback id='feedback' />
            <a id='github' href="https://github.com/jeshsy" target="_blank" className="contact-details">GitHub</a>
            <a id='email' href="mailto:jeshipioyoon55@gmail.com" className="contact-details"> jeshipioyoon55@gmail.com </a>
{/*         <a href="mailto:example@example.com" className="contact-details">Send a mail</a>
            <a href="tel:555-555-5555" className="contact-details">Call me</a>  */}
          </div>
        </div>
        {/*<footer>
          Footer
        </footer> */}
      </div>
    );
  }
}

export default App;
