import React, { Component } from 'react'
import { initAppFinished } from '../actions';
import { connect } from 'react-redux';
 
class AppInit extends Component {

  static defaultProps = {
    initialized: false
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    // Pretending to set up some initial app state here...
    setTimeout(function() {

      // Init done!
      this.props.dispatch(initAppFinished())

    }.bind(this), 500);
  }

  render() {
    return (
      this.props.initialized && this.props.children
    );
  }
}

const mapStateToProps = (state) => ({
 initialized: state.app.initialized
})

export default connect(mapStateToProps)(AppInit);
