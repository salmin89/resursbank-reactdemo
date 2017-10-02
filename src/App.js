import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component
import PeopleList from './components/PeopleList';
import SelectedPerson from './components/SelectedPerson';
import Error from './components/dumb/Error';
// Actions
import * as personDataActions from './actions/personData.actions';
import * as errorActions from './actions/error.actions';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = { errors: [] };
    this.clearError = this.clearError.bind(this);
  }

  componentWillMount() {
    this.props.actions.getAllPeople();
    // this.setState(errorStore.errors)
  }

  componentWillReceiveProps(props) {
    this.setState({errors: props.errorStore.errors});
  }
  
  clearError(error) {
    this.props.errorActions.clearError(error);    
  }

  render() {
    console.log(this.state);

    return (
      <div className="container">

        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">
            <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Sample
          </a>
        </nav>

        {true &&
          this.state.errors.map((error, index) => {
            return (
              <Error  errorMsg={error} 
                      clearError={this.clearError}
                      key={index} />
            )
          })
        }

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
  return {
    errorStore: state.errorStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personDataActions, dispatch),
    errorActions: bindActionCreators(errorActions, dispatch)    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);