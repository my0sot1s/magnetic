import React, { Component } from 'react'; //eslint disable-line
import { Link } from 'react-router';

import MainMenu from './../MainMenu';
import Home from './../Home';
import ShareMenu, { LeftFooterMenu } from './../MenuShare';
/**
 *className Home
 */
export default class Index extends Component {
  /**
   * when start
   */
  whenNull() {
    return (
      <Home />
    );
  }
  /**
   *render View
   */
  render() {
    return (
      <div>
        <header>
          <HeadPage />
          <MainMenu />
          <div className="footer clearfix">
            <ShareMenu />
            <LeftFooterMenu />
          </div>
        </header>

        <session>
          {this.props.children === null ? this.whenNull.bind(this)() : this.props.children}
        </session>
      </div >
    );
  }
}
/**
 * render title
 */
class HeadPage extends Component {
  /**
   * Header Page
   */
  render() {
    return (
      <div>
        <div className="logo">
          <a href="/"><img src="./../../public/img/logo.png" title="Magnetic" alt="Magnetic" /></a>
          <p className="subTitile">Story in the fact</p>
        </div>
        <div id="menu_icon"></div>
      </div>
    );
  }
}
