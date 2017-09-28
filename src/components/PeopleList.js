// Lib
import React from 'react';
import { connect } from 'react-redux';

// Components
import Person from '../components/Person';

class PeopleList extends React.Component {

    render() {

        // console.groupCollapsed("PeopleList");
        // console.log(this.props);
        // console.groupEnd();

        const { people } = this.props.people ? this.props : this.props.personStore;

        return (
            <ul className="list-group">
                {/* {JSON.stringify(people)}; */}

                { people && people.map((person, index) => {
                    return (
                        <Person 
                            person={person} //old way
                            index={index} // index-ref
                            key={index} // req from react
                        />
                    );
                })}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);