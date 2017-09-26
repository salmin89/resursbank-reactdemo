import React from 'react';
import Person from '../components/Person';

class PeopleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: null
        };    
    }

    handleSelectedPerson (person) {
        debugger;
        // this.setState({selectedPerson: person});
        // console.log(this.state);
    }

    render() {

        console.groupCollapsed("PeopleList");
        console.log(this.props);
        console.groupEnd();

        const { people } = this.props;
        
        return (
            <ul className="list-group">
                { people.map(person => {
                    return (<Person key={person.name} person={person} selectedPerson={ this.handleSelectedPerson } />);
                }) }
            </ul>
        );
    }
}

export default PeopleList;