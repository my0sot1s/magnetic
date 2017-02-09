import React from 'react';
export default class Author extends React.Component {

  render() {
    return (
      <div>
        <h1>This Author {this.props.params.id}</h1>
      </div>
    );
  }
}

