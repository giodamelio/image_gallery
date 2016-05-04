import React from 'react';
import ReactDOM from 'react-dom';
import baobabReact from 'baobab-react/higher-order';

import Navbar from './navbar';
import Gallery from './gallery';
import state from './state';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Gallery />
      </div>
    );
  }
}

const RootedApp = baobabReact.root(state, App);

ReactDOM.render(
  <RootedApp />,
  document.getElementById('app')
);
