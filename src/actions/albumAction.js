import axios from 'axios';
const fetchAlbum = dispatch => {
  axios.get('https://nodedata-api.herokuapp.com/i/3').then(res => {
    dispatch({
      type: 'FETCH_ALBUM_SUCCESS',
      payload: res.data,
    });
  }).catch(err => {
    dispatch({
      type: 'FETCH_ALBUM_ERROR',
      payload: err,
    });
  });
};
export { fetchAlbum };
