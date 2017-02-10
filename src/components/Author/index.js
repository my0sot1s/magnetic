import React from 'react';
import FacebookProvider, { Share, CommentsCount } from 'react-facebook';
/**
 *render Author
 */
export default class Author extends React.Component {
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
   */
  renderComment() {
    return (
      <div className="fbComment">
        <div className="fb-comments"
          data-href="https://localhost/"
          data-numposts="5"
          data-width="100%"></div>
      </div>);
  }

  /**
   *renderView
   */
  render() {
    return (
      <section className="main clearfix">
        <section className="top">
          <div className="wrapper content_header clearfix">
            <div className="work_nav">

              <ul className="btn clearfix">
                <li>
                  <a href="#" className="previous" data-title="Previous"></a>
                </li>
                <li>
                  <a href="index.html" className="grid" data-title="Portfolio"></a>
                </li>
                <li>
                  <a href="#" className="next" data-title="Next"></a>
                </li>
              </ul>

            </div>
            <h1 className="title">Sed do eiusmod tempor incididunt ut labore et dolore seed magna aliqua.</h1>
          </div>
        </section>
        <section className="wrapper">
          <div className="content">
            <div>
              {this.props.params.id}
              <p>Nunc pellentesque mauris ut magna pulvinar, quis fermentum tellus pulvinar. Curabitur ut fermentum quam. Nam tincidunt
					sagittis neque in elementum. Fusce convallis cursus porta. Curabitur dapibus pretium leo, at laoreet magna ullamcorper
					ac. Integer quam nulla, fringilla ac imperdiet at, consequat vel leo. Quisque non semper justo, eu aliquam velit. Pellentesque
					rhoncus, quam ac fringilla euismod, ligula diam congue orci, id cursus dui velit quis ligula.</p>

              <h2>Nulla nec pellentesque tempus, ipsum arcu aliquam tortor.</h2>

              <p>vel tempus libero diam vel arcu. Etiam id tincidunt tortor. Nam auctor consequat quam, vel mattis dui laoreet a. Nunc
					condimentum iaculis tortor, id eleifend nulla mattis lobortis. Pellentesque semper blandit odio, id tempor lorem imperdiet
					eu. Ut sagittis sagittis consectetur ,Maecenas eget risus eros. Nunc venenatis ante a rutrum cursus.</p>
              <img src="./../../public/img/work1.jpg" className="media" alt="d" />
              <h2>Quisque non semper justo</h2>

              <p>Commodo at blandit vitae, placerat in sem. Morbi ornare nec felis in euismod. Suspendisse vulputate orci ultrices enim
					facilisis, vel lobortis magna rhoncus. Integer mattis at elit vitae adipiscing. Cras imperdiet cursus nunc quis ullamcorper.</p>

              <p>vel tempus libero diam vel arcu. Etiam id tincidunt tortor. Nam auctor consequat quam, vel mattis dui laoreet a. Nunc
					condimentum iaculis tortor, id eleifend nulla mattis lobortis. Pellentesque semper blandit odio, id tempor lorem imperdiet
					eu. Ut sagittis sagittis consectetur ,Maecenas eget risus eros. Nunc venenatis ante a rutrum cursus.</p>

              <p>Commodo at blandit vitae, placerat in sem. Morbi ornare nec felis in euismod. Suspendisse vulputate orci ultrices enim
					facilisis, vel lobortis magna rhoncus. Integer mattis at elit vitae adipiscing. Cras imperdiet cursus nunc quis ullamcorper.</p>

            </div>
            {this.renderComment.bind(this)()}
          </div>
          <div className="right_menu">
            <div>
              <div id="fb-root"></div>
              <h4 style={{ padding: 20 }}>View me -> my page</h4>
              {this.renderPage.bind(this)()}
            </div>
            <div style={{ margin: 20 }}>
              <h4>Some post</h4>
              <p>Lallalalala</p>
              <p>Lallalalala</p>
              <p>Lallalalala</p>
              <p>Lallalalala</p>
              <p>Lallalalala</p>
              <p>Lallalalala</p>
              <p>Lallalalala</p>
            </div>
          </div>
        </section>
      </section >
    );
  }
}

