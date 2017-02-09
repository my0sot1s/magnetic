const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  errCode: null,
};
// {id,uname,pword}
const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      var ar = [];
      Object.keys(action.payload).forEach(key => {
        ar.push(action.payload[key]);
      });
      state = {
        ...state,
        fetching: false,
        fetched: true,
        users: ar,
      };
      return state;
    case 'FETCH_USERS_ERROR':
      state = {
        ...state,
        fetching: false,
        fetched: true,
        errCode: action.payload,
      };
      return state;
    case 'ADD_USER':
      var data = action.payload;
      const newId = state.users.length + 1;
      data._id = newId;
      // state = { ...state, ids: [...state.ids, newId], users: [...state.users, data] };
      state = Object.assign({ state }, { users: [...state.users, data] });
      return state;
  }
  return state;
};
export default userReducers;
