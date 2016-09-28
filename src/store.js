let {createStore} = require('redux');
let debug = console.log.bind(console, '[store]');
let range = require('lodash/range');

let initialState = {
  faces: range(0, 37),
  pointer: 0
};

function reducer(state = initialState, action) {
  debug(JSON.stringify(arguments));
  switch (action.type) {
    case 'point':
      return Object.assign(
        {},
        state,
        {pointer: (state.pointer + 1) % state.faces.length}
      );
    default:
      return state;
  }
}

module.exports = createStore(reducer);
