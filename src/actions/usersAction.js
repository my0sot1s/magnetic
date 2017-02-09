import axios from 'axios';
/**
 *Cac hanh dong lien quan toi user
 */
const fetchUsers = dispatch => {
  axios.get('https://nodedata-api.herokuapp.com/i/2').then(res => {
    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      payload: res.data,
    });
  }).catch(err => {
    dispatch({
      type: 'FETCH_USERS_ERROR',
      payload: err,
    });
  });
};
const addUser = (uname, pcode) => {
  return {
    type: 'ADD_USER',
    payload: {
      uname,
      pcode,
    },
  };
};
const updateUser = (id, uname, pword) => {
  return {
    type: 'UPDATE_USER',
    payload: {
      id,
      uname,
      pword,
    },
  };
};

export { fetchUsers, addUser, updateUser };
