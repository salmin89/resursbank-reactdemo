// Lib
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component
import PeopleList from '../components/PeopleList'

// Actions
import * as personDataActions from '../actions/personData.actions';

class Person extends React.Component {

    handleClick(e, person) {
        e.stopPropagation();
        this.props.actions.selectPerson(person);
    }

    render() {

        // console.groupCollapsed("Person_" + this.props.person.name);
        // console.log(this.props);
        // console.groupEnd();

        const { person } = this.props; // passed vars
        // const { index } = this.props;
        // const { people } = this.props.personStore;

        return (
            <li className="list-group-item" onClick={(e) => { this.handleClick(e, person); }} style={{ cursor: 'pointer' }}>

                <div className="row">
                    <div className="col-md-3">{person.name}</div> {/* passed vars */}
                    <div className="col-md-2">{person.age}</div>
                    <div className="col-md-7 text-right">{person.city}</div> { /* reference to personStore(people) */}

                    <div className="col-md-12">
                        {/* Show console.count() */}
                        {person.children.length > 0 && <PeopleList people={person.children} />}
                    </div>
                </div>
            </li>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Person);