// Lib
import React from 'react';
import { connect } from 'react-redux';

// Component
import PeopleList from '../components/PeopleList'

class Person extends React.Component {

    handleClick (e, person) {
        debugger;
        e.stopPropagation();
        this.props.selectPerson(person);
    }
    
    render() {

        // console.groupCollapsed("Person_" + this.props.person.name);
        // console.log(this.props);
        // console.groupEnd();

        const { person } = this.props; // passed vars
        const { index } = this.props;
        const { people } = this.props.personStore;

        return (
            <li className="list-group-item" onClick={(e) => {this.handleClick(e); }} style={{cursor: 'pointer'}}>

                <div className="row">
                    <div className="col-md-3">{person.name}</div> {/* passed vars */}
                    <div className="col-md-2">{people[index].age}</div>
                    <div className="col-md-7 text-right">{people[index].city}</div> { /* reference to personStore(people) */ }

                    <div className="col-md-12">
                        {/* Show console.count() */}
                        { person.children.length > 0 &&  <PeopleList people={people[index].children} />}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);