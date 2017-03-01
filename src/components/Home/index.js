import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import View from './view';
import Reducer, { ListPostsType } from './../../reducers/listPosts';
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
      list: {},
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
     * Receiver new Data
     * @param {Props} nextProps instead of current props
     */
  componentWillReceiveProps(nextProps) {
    if (nextProps.listPosts.type === ListPostsType.LIST_POSTS_REQUEST) {
      this.setState({ fetching: true });
    }
    else if (nextProps.listPosts.type === ListPostsType.LIST_POSTS_SUCCESS) {
      this.setState({
        list: nextProps.listPosts.listPosts,
        fetching: false,
      });
    }
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
    return (
      <View
        arrayPost={this.formatObject(this.state.list)}
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
export const mapStateToProps = state => ({
  listPosts: state.listPostsReducer,
}
);
export const mapDispathToProps = dispath => ({
  listPostsRequest: dispathFn.bind(this, dispath),
});
export const dispathFn = (dispath, id) => {
  dispath(Reducer.listPostsRequest(id));
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
