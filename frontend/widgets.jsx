import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.findElementById('root');
//   ReactDOM.render(<h1> Widgets </h1>, root);
// });
class Root extends React.Component {

  render() {
    return (
      <div />
    );
  }

}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Clock />, document.getElementById('root'));
});
