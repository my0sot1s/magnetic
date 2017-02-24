import React, { Component } from 'react'; //eslint disable-line
import { Link } from 'react-router';


/**
 *className Home
 */
export default class MainMenu extends Component {
  /**
   *render menu
   */
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/home" className="selected">Home</Link></li>
          <li><a href="#">About</a></li>
          <li><Link to="/album">Contact</Link></li>
          <li><Link to="/author">Author</Link></li>
          <li><a href="#">Journal</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
    );
  }
}
