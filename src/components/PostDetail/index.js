import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import View from './view';
import Reducer from './../../reducers/postDetail';
import { dbListPosts } from './../../reducers/listPosts';
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
    };
    this.id = Number(this.props.params.id);
    this.listPosts = dbListPosts[this.id];
    this.len = Object.keys(dbListPosts).length;
  }
  /**
   * fetch data
   */
  componentDidMount() {
    const { postDetailRequest } = this.props;
    postDetailRequest(this.state.id, this.id);
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
    const url = config.domain + '/post/'
      + config.toText(this.listPosts.titile).replace(/\s/g, '-')
      + '/' + this.id;
    var arrRecommend = [];
    for (var i = 0; i < config.postRecommend; i++) {
      var detail = {};
      detail.id = this.createRecommendPost(1, this.len);
      detail.title = dbListPosts[detail.id].titile;
      detail.url = config.toText(detail.title).replace(/\s/g, '-');
      detail.icon = dbListPosts[detail.id].banner[0];
      arrRecommend.push(detail);
    }
    console.log(arrRecommend);
    return (
      <View
        postDetail={this.props.postDetail}
        listPosts={this.listPosts}
        url={url}
        recommendPost={arrRecommend}
      />
    );
  }
}
const mapStateToProps = state => (
  {
    postDetail: state.postDetailReducer.postDetail,
  }
);
const mapDispathToProps = dispath => ({
  postDetailRequest: (id, postId) => {
    dispath(Reducer.postDetailRequest(id, postId));
  },
});
export default connect(
  mapStateToProps,
  mapDispathToProps
)(PostDetail);
