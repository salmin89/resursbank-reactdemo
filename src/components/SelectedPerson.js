// Lib
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import FormData from '../components/dumb/FormData';

// Actions
import * as personDataActions from '../actions/personData.actions';

class SelectedPerson extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: {
                name: '',
                age: 0,
                city: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({selectedPerson: newProps.personStore.selectedPerson});
    }

    handleChange(e, key) {
        let newState = this.state.selectedPerson;
        newState[key] = e.target.value;
        this.setState(newState);
    }

    savePerson(e) {
      e.preventDefault();
      this.props.actions.savePerson(this.props.personStore.people);
    }

    render() {

        const { selectedPerson } = this.props.personStore;
        return (
            <div>
                {/* {JSON.stringify(this.state.selectedPerson)} */}
                {selectedPerson && <div className="row">
                    <form onSubmit={(e) => this.savePerson(e)}>
                        <div className="col-md-12"><h2>Selected person</h2></div>

                        {/* { Object.keys(selectedPerson).map((key) => {
                          return (<FormData key={key} value={selectedPerson[key]} />)  // One way to do it
                        })} */}

                        <FormData onChange={this.handleChange} type={'text'} label={'Name'} value={this.state.selectedPerson.name} />
                        <FormData onChange={this.handleChange} type={'number'} label={ 'Age' } value={this.state.selectedPerson.age} />
                        <FormData onChange={this.handleChange} type={'text'} label={ 'City' } value={this.state.selectedPerson.city} />
                        
                        <button className="btn btn-default" type="submit" style={{cursor: 'pointer'}}>Save</button>
                    </form>
                </div>}
            </div>
        )
    }

}

// REDUX

function mapStateToProps(state, props) {
    return {
        personStore: state.personStore
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(personDataActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPerson);