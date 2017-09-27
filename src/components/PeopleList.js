import React from 'react';
import Person from '../components/Person';

class PeopleList extends React.Component {

    render() {

        console.groupCollapsed("PeopleList");
        console.log(this.props);
        console.groupEnd();

        const { people } = this.props;
        
        return (
            <ul className="list-group">
                { people.map(person => {
                    return (<Person key={person.name} person={person} selectPerson={ this.props.selectPerson } />);
                }) }
            </ul>
        );
    }
}

export default PeopleList;