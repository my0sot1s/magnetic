import React, { Component } from 'react'; //eslint disable-line
import { Link } from 'react-router';


/**
 *className Home
 */
export default class MenuShare extends Component {
  /**
   *render share menu
   */
  render() {
    return (
      <ul className="social clearfix">
        <li>
          <a href="http://fb.com/0.anhsang.0" className="fb" data-title="Facebook" target="_blank"></a>
        </li>
        <li>
          <a href="#" className="google" data-title="Google +"></a>
        </li>
        <li>
          <a href="https://twitter.com/my0sot1ss" className="twitter" data-title="Twitter" target="_blank"></a>
        </li>
        <li>
          <a href="#" className="rss" data-title="RSS"></a>
        </li>
      </ul>
    );
  }
}

/**
 * LeftFooterMenu
 */
export class LeftFooterMenu extends Component {
  /**
   *render Left footer
   */
  render() {
    return (
      <div className="rights">
        <p>Copyright © 2014 magnetic.</p>
        <p>Template by <a href="">my0sot1s</a></p>
      </div>
    );
  }
}
