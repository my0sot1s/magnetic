import React, { Component } from 'react';
import { Link } from 'react-router';
/**
 *className Home
 */
export default class HomeViewHeader extends React.Component {

  /**
   * render view
   */
  render() {
    return (
      <section className="slogan_frame">
        <div>
          <h1 className="slogan">Collection many story</h1>
        </div>
      </section>
    );
  }
}
