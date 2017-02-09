import React, { Component } from 'react';
import { Link } from 'react-router';
/**
 *Class Home
 */
export default class Index extends Component {

  render() {
    return (
      <div>
        <h1>This Home</h1>
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/album">Contact</Link>
              <ul>
                <li><Link to="/album/author/1">Author</Link></li>
              </ul>
            </li>
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}
