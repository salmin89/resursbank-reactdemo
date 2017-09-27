import React from 'react';
import PeopleList from '../components/PeopleList';

class SelectedPerson extends React.Component {

    render() {
        const { selectedPerson } = this.props;
        return (
            <div>
                {selectedPerson &&
                    <div className="row">
                        <div className="col-md-12"><h2>Selected person</h2></div>
                        <div className="col-md-12">{selectedPerson.name}</div>
                        <div className="col-md-12">{selectedPerson.age}</div>
                        <div className="col-md-12">{selectedPerson.city}</div>
                        { selectedPerson.children.length > 0 &&  <PeopleList people={selectedPerson.children} />} {/* pass selectPerson again */}
                    </div>
                }
            </div>
        )
    }

}

export default SelectedPerson;