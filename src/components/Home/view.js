import React, { Component } from 'react';
/**
 *class View
 */
export default class HomeView extends React.Component {
  componentWillMount() {
    console.log('willMount', this.props);
  }
  componentDidMount() {
    console.log('didMount', this.props.users);
  }
  render() {
    const { users } = this.props.users;
    console.log('view render', users);
    return (
      <ul>
        {users.map(user =>
          <li key={user._id}>
            <p>{user._id}</p>
            <p>{user.uname}</p>
            <p>{user.pcode}</p>
          </li>
        )}
      </ul>
    );
  }
}
//  <ul>
//         {users.map(user =>
//           <li key={user.id}>
//             <p>{user.id}</p>
//             <p>{user.uname}</p>
//             <p>{user.pword}</p>
//           </li>
//         )}
//       </ul>