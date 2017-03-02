import React, { Component } from 'react'; //eslint disable-line
import { Link } from 'react-router';

/**
 *className Home
 */
export default class FacebookPages extends Component {
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
}
