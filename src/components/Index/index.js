import React, { Component } from 'react'; //eslint disable-line
import { Link } from 'react-router';
/**
 *className Home
 */
export default class Index extends Component {
  whenNull() {
    return (
      <section className="main clearfix">
        <img src="./../../public/img/misty.jpg" alt="Magnetic" />
      </section>
    );
  }
  /**
   *render View
   */
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <a href="index.html"><img src="./../../public/img/logo.png" title="Magnetic" alt="Magnetic" /></a>
            <p className="subTitile">Story in the fact</p>
          </div>
          <div id="menu_icon"></div>
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
          <div className="footer clearfix">
            <ul className="social clearfix">
              <li>
                <a href="#" className="fb" data-title="Facebook"></a>
              </li>
              <li>
                <a href="#" className="google" data-title="Google +"></a>
              </li>
              <li>
                <a href="#" className="twitter" data-title="Twitter"></a>
              </li>
              <li>
                <a href="#" className="rss" data-title="RSS"></a>
              </li>
            </ul>
            <div className="rights">
              <p>Copyright © 2014 magnetic.</p>
              <p>Template by <a href="">my0sot1s</a></p>
            </div>
          </div>
        </header>
        <session>
          {this.props.children === null ? this.whenNull.bind(this)() : this.props.children}
        </session>
      </div >
    );
  }
}
