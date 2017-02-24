import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import View from './view';
import Reducer from './../../reducers/listPosts';
import config from './../../constaints';
/**
 *className Home
 */
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: false,
      id: 4,
    };
  }
  /**
   * fetch category
   */
  componentDidMount() {
    const { listPostsRequest } = this.props;
    listPostsRequest(this.state.id);
  }
  /**
   * format object
   */
  formatObject(obj) {
    var arr = [];
    Object.keys(obj).map(key => {
      arr.push(obj[key]);
    });
    return arr;
  }
  /**
   *render View for home
   */
  render() {
    const { listPosts } = this.props;
    return (
      <View
        arrayPost={this.formatObject(listPosts.listPosts)}
        config={config.toText}
      />
    );
  }
}
/**
 * ex: usersReducer define in reducers index
 */
/**
 * ex: usersReducer define in reducers index
 */
const mapStateToProps = state => (
  {
    listPosts: state.listPostsReducer,
  }
);
const mapDispathToProps = dispath => ({
  listPostsRequest: id => {
    dispath(Reducer.listPostsRequest(id));
  },
});
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
