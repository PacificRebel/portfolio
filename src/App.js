import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class FrontPage extends React.Component {
  render() {
    return (
      <button onClick={this.name}>click to see Project 1</button>
    );
  }
}
// ReactDOM.render(<FrontPage />, document.getElementById('root'));
export default FrontPage;
