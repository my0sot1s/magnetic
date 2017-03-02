import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import View from './view';
import Reducer, { PostDetailType } from './../../reducers/postDetail';
import db from './../../reducers/storages';
import config from './../../constaints';

/**
 *render Author
 */
class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      id: 5,
      list: {},
    };
    this.id = Number(this.props.params.id);
    this.listPosts = db.dbListPosts[this.id];
    this.len = Object.keys(db.dbListPosts).length;
  }
  /**
   * fetch data
   */
  componentDidMount() {
    const { postDetailRequest } = this.props;
    postDetailRequest(this.state.id, this.id);
  }
  /**
       * Receiver new Data
       * @param {Props} nextProps instead of current props
       */
  componentWillReceiveProps(nextProps) {
    if (nextProps.postDetail.type === PostDetailType.POST_DETAIL_REQUEST) {
      this.setState({ fetching: true });
    } else if (nextProps.postDetail.type === PostDetailType.POST_DETAIL_SUCCESS) {
      this.setState({
        list: nextProps.postDetail.postDetail,
        fetching: false,
      });
    }
  }
  /**
   * create recommend random
   */
  createRecommendPost(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  /**
   *renderView
   */
  render() {
    const url = config.domain.concat('/post/',
      config.toText(this.listPosts.titile).replace(/\s/g, '-'),
      '/', this.id);
    var arrRecommend = [];
    for (var i = 0; i < config.postRecommend; i++) {
      var detail = {};
      detail.id = this.createRecommendPost(1, this.len);
      detail.title = db.dbListPosts[detail.id].titile;
      detail.url = config.toText(detail.title).replace(/\s/g, '-');
      detail.icon = db.dbListPosts[detail.id].banner[0];
      arrRecommend.push(detail);
    }
    return (
      <View
        postDetail={this.state.list}
        listPosts={this.listPosts}
        url={url}
        recommendPost={arrRecommend}
      />
    );
  }
}
export const mapStateToProps = state => ({
  postDetail: state.postDetailReducer,
}
);
export const mapDispathToProps = dispath => ({
  postDetailRequest: dispathFn.bind(this, dispath),
});
export const dispathFn = (dispath, id, postId) => {
  dispath(Reducer.postDetailRequest(id, postId));
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(PostDetail);
