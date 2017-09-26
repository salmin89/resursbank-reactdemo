import React from 'react';
import PeopleList from '../components/PeopleList'

class Person extends React.Component {

    handleClick (e, person) {
        e.stopPropagation();
        // console.log(person);
        this.props.selectedPerson(person);
    }
    
    render() {

        // console.groupCollapsed("Person_" + this.props.person.name);
        // console.log(this.props);
        // console.groupEnd();

        const { person } = this.props;


        return (
            <li className="list-group-item" onClick={(e) => {this.handleClick(e, person); }} style={{cursor: 'pointer'}}>

                <div className="row">
                    <div className="col-md-3">{person.name}</div>
                    <div className="col-md-2">{person.age}</div>
                    <div className="col-md-7 text-right">{person.city}</div>

                    <div className="col-md-12">
                        {/* Show console.count() */}
                        { person.children.length > 0 &&  <PeopleList people={person.children} />}
                    </div>
                </div>
            </li>
        );
    }
}

export default Person;