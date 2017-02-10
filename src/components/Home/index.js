import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { fetchUsers, addUser, updateUser } from '../../actions/usersAction';
import View from './view';
/**
 *className Home
 */
export default class Home extends React.Component {
  /**
   *render View for home
   */
  render() {
    return (
      <section className="main clearfix">
        <div className="work">
          <a href="">
            <Link to="/author/1">
              <img src="./../../public/img/work1.jpg" className="media" alt="" />
              <div className="caption">
                <div className="work_title">
                  <h1>culpa qui officia deserunt mollit </h1>
                  <p>Author</p>
                </div>
              </div>
            </Link>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work2.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit culpa qui officia deserunt mollit</h1>
                <p>culpa qui officia deserunt mollit</p>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work3.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work4.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work5.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work6.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work2.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work3.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>

        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/work1.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/chichchu.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/chimtuhu.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a href="inner.html">
            <img src="./../../public/img/deocaygiuaduong.jpg" className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>culpa qui officia deserunt mollit</h1>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  }
}

