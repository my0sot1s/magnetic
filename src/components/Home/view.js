import React, { Component } from 'react';
import { Link } from 'react-router';
import HomeViewHeader from './viewHeader';

/**
 *className Home
 */
export default class HomeView extends React.Component {

  /**
   * create url
   */
  createUrl(item) {
    const ti = this.props.config(item.titile).replace(/\s/g, '-');
    return '/post/'.concat(ti, '/', item._id);
  }
  /**
   * render to work Component
   * @param item
   */
  renderWorkComponent(item) {
    const url = this.createUrl(item);
    return (
      <div className="work">
        <a href="javascript:;">
          <img src={item.banner[0]} className="media" alt="" />
          <Link to={url}>
            <div className="caption" id={item._id}>
              <div className="work_title">
                <h1>{item.titile}</h1>
                <h3>{item.author}</h3>
                <p className="beginStory">{item.begin}</p>
              </div>
              <div className="inforStory">
                <p className="dateCreate">{item.dateCreate}</p>
                <p>View: {item.views} <span>Share: {item.shares}</span></p>
              </div>
            </div>
          </Link>
          <div className="shower"></div>
        </a>
      </div>
    );
  }
  /**
   * render view
   */
  render() {
    return (
      <section className="main clearfix">
        <HomeViewHeader />
        {this.props.arrayPost.map(val => {
          return (this.renderWorkComponent(val));
        })}
      </section>
    );
  }
}
