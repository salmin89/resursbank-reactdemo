// Lib
import React from 'react';
import { connect } from 'react-redux';

// Component

class SelectedPerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: {
                name: "",
                age: "",
                city: ""
            }
        };

        // this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(prop) {
        const { selectedPerson } = this.props.personStore;
        if (selectedPerson) {
            this.setState({selectedPerson: selectedPerson})
        }
    }

    savePerson(e) {
        e.preventDefault();

        const updatedPerson = {
            name: this.refs.name.value,
            age: this.refs.age.value,
            city: this.refs.city.value,
            children: this.props.personStore.selectedPerson.children
        }
        console.log(updatedPerson);
    }

    handleChange(e) {
        console.log(e.target.value);
        // debugger; show
        // this.setState({value: e.target.value});
    }

    render() {

        const { selectedPerson } = this.props.personStore;
        return (
            <div>
                {JSON.stringify(selectedPerson)}
                {selectedPerson && <div className="row">
                    <form onSubmit={(e) => this.savePerson(e)}>
                        <div className="col-md-12"><h2>Selected person</h2></div>

                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" ref="name" className="form-control" value={this.state.selectedPerson.name} onChange={ this.handleChange } />
                        </div>

                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" ref="age" className="form-control" defaultValue={selectedPerson.age} />
                        </div>


                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" ref="city" className="form-control" defaultValue={selectedPerson.city} />
                        </div>


                        <div className="form-group">
                            <button className="btn btn-default" style={{ cursor: 'pointer' }}>Save</button>
                        </div>
                        
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPerson);