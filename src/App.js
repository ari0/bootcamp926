let React = require('react');
let {connect} = require('react-redux');
let identity = require('lodash/identity');
let store = require('./store');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      store.dispatch({type: 'point'});
    }, 500);
  }

  render() {
    let {faces, pointer} = this.props;
    return <div className="app">
      <div className="faces">
        {
          faces.map((face, idx) => {
            let style = {
              backgroundColor: idx === pointer ? 'blue' : 'black'
            };

            return <div key={idx} className="face" style={style}>
              {face}
            </div>;
          })
        }
      </div>
      <div className="bottom">
      </div>
    </div>;
  }
}

module.exports = connect(identity)(App);
