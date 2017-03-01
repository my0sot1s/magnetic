import React, { Component } from 'react';
import { Link } from 'react-router';
/**
 *className Home
 */
export default class PostDetailView extends React.Component {

  /**
    *before start
    */
  componentDidMount() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=251071115277192"; // App id
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  /**
   *render Share
   */
  renderPage() {
    return (
      <div className="fb-page"
        data-href="https://www.facebook.com/ma9net1c/"
        data-tabs="timeline" data-height="200" data-width="290"
        data-small-header="false" data-adapt-container-width="true"
        data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/ma9net1c/"
          className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/ma9net1c/">Facebook</a>
        </blockquote>
      </div>
    );
  }
  /**
   * render Facebook commnend
   * @url
   */
  renderComment() {
    const url = this.props.url;
    return (
      <div className="fbComment">
        <div className="fb-comments"
          data-href={url}
          data-numposts="5"
          data-width="100%"></div>
      </div>);
  }
  /**
   *render clearfix button
   */
  renderClearFix(head) {
    return (
      <section className="top">
        <div className="wrapper content_header clearfix">
          <div className="work_nav">

            <ul className="btn clearfix">
              <li>
                <a href="javascript:;" className="previous" data-title="Previous">
                </a>
              </li>
              <li>
                <a href="javascript:;" data-title="Home">
                  <Link to="/home" className="grid"></Link>
                </a>
              </li>
              <li>
                <a href="javascript:;" className="next" data-title="Next"></a>
              </li>
            </ul>

          </div>
          <h1 className="title">{head.titile}</h1>
        </div>
      </section>
    );
  }
  /**
   * render recommend Post
   */
  renderRecommendPost(d) {
    console.log('ddm ma', d);
    if (d !== undefined) {
      return (
        d.map(v => (
          <li>
            <Link to={'/post/'.concat(v.url, '/', v.id)}>
              <img src={v.icon} tag={v.title} height='32' width='32' />
              {v.title}</Link>
          </li>
        ))
      );
    }
  }
  /**
   *render right_menu
   */
  renderRightMenu() {
    return (
      <div className="right_menu">
        <div>
          <div id="fb-root"></div>
          <h4 style={{ padding: 20 }}>YOU CAN SEE ME ON PAGE</h4>
          {this.renderPage.bind(this)()}
        </div>
        <div style={{ margin: 20 }}>
          <h3>Recently Posts</h3>
          <ul>
            {this.renderRecommendPost(this.props.recommendPost)}
          </ul>
        </div>
      </div>
    );
  }
  /**
   *render story content
   */
  renderContent(story, des) {
    return (
      <div>

        <h2>Bài học</h2>
        <p>{des.begin}</p>

        <img src={story.banner} className="media" alt="d" />

        <h2>Nội dung</h2>
        {story.content}
      </div>
    );
  }
  /**
   * render View
   */
  render() {
    const { postDetail, listPosts } = this.props;
    console.log(this.props);
    return (
      <section className="main clearfix">
        {this.renderClearFix(postDetail)}
        <section className="wrapper">
          <div className="content">

            {this.renderContent(postDetail, listPosts)}

            {this.renderComment()}
          </div>
          {this.renderRightMenu()}
        </section>
      </section>
    );
  }
}
