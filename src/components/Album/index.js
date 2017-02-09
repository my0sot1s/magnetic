import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albumAction';
import View from './view';
/**
 *Class Home
 */
class Album extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetchAlbum(this.props.dispatch);
  }
  render() {
    const { images, dispatch } = this.props.album;
    console.log('image', images);
    return (
      <div>
        <h1>This Album</h1>
        {images.map(image =>
          <img src={image} />)}
      </div>
    );
  }
}
Album.PropTypes = {
  album: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(({ album }) => ({ album }))(Album);
