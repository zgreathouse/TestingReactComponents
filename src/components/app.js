import React, { Component } from 'react';

//components
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
