import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component
import PeopleList from './components/PeopleList';
import SelectedPerson from './components/SelectedPerson';

// Actions
import * as personDataActions from './actions/personData.actions';

class App extends React.Component {

  componentWillMount() {
    this.props.actions.getAllPeople();
  }

  render() {

    return (
      <div className="container">

        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">
            <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Sample
          </a>
        </nav>

        <div className="row">
          <div className="col-md-6">
            <PeopleList />
          </div>

          <div className="col-md-6">
            <SelectedPerson />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personDataActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);