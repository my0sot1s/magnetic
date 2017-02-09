const initialState = {
  fetching: false,
  fetched: false,
  images: [],
  errCode: null,
};

// {id,uname,pword}
const albumReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUM_SUCCESS':
      var ar = [];
      Object.keys(action.payload).forEach(key => {
        ar = [...ar,...action.payload[key].links];
      });
      state = {
        ...state,
        fetching: false,
        fetched: true,
        images: ar,
      };
      return state;
    case 'FETCH_ALBUM_ERROR':
      state = {
        ...state,
        fetching: false,
        fetched: true,
        errCode: action.payload,
      };
      return state;
  }
  return state;
};
export default albumReducers;
