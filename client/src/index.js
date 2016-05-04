import React from 'react';
import ReactDOM from 'react-dom';
import baobabReact from 'baobab-react/higher-order';

import Navbar from './navbar';
import Gallery from './gallery';
import AddImageModel from './addImageModel';
import state from './state';

const App = () => (
  <div>
    <Navbar />
    <Gallery />
    <AddImageModel />
  </div>
);

const RootedApp = baobabReact.root(state, App);

ReactDOM.render(
  <RootedApp />,
  document.getElementById('app')
);
console.log('Run "localStorage.debug = \'image_gallery:*\'" to see debug logging'); // eslint-disable-line no-console, max-len
