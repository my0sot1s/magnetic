import React, { Component, PropTypes, Link } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUser, updateUser } from '../../actions/usersAction';
import View from './view';
/**
 *Class Home
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetchUsers(this.props.dispatch);
  }
  addUser(dispatch) {
    dispatch(addUser('dasdads', 'dadsdsd'));
  }
  render() {
    const { users, dispatch } = this.props;
    console.log(this.props);
    return (
      <div>
        <input type='text' ref='text' />
        <button onClick={this.addUser.bind(this, dispatch)}>Add</button>
        <View users={users} />
      </div>
    );
  }
}
Home.PropTypes = {
  users: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(({ users }) => ({ users }))(Home);
