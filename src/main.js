let App = require('./App');
let React = require('react');
let {Provider} = require('react-redux');
let ReactDOM = require('react-dom');
let store = require('./store');

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementsByClassName('container')[0]
  );
}

window.onload = main;
