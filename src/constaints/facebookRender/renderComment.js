import React, { Component } from 'react'; //eslint disable-line
import { Link } from 'react-router';
/**
 *className Home
 */
export default class FacebookComment extends Component {
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
}
