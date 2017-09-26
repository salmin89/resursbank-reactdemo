import React from 'react';
import PeopleList from './components/PeopleList';


const people = [
  { name: "Salmin", age: 28, city: "Helsingborg", children: [] },
  { name: "Test", age: 15, city: "Malmö", children: [] },
  { name: "Bengt", age: 31, city: "Lund", children: [] },
  {
    name: "Åsa", age: 44, city: "Malmö", children: [
      { name: "Albert", age: 12, city: "Helsingborg", children: [] },
      { name: "Test", age: 15, city: "Malmö", children: [] },
      { name: "Bengt", age: 31, city: "Lund", children: [] }
    ]
  }];

class App extends React.Component {

  handleSelectedPerson(person) {
    console.log("APP!");
  }

  render() {

    return (
      <div className="container">

        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">
            <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            Sample
          </a>
        </nav>

        <div className="row">
          <div className="col-md-6">
            <PeopleList people={people} selectedPerson={this.handleSelectedPerson} />
          </div>

          <div className="col-md-6">
            Selected person:
          </div>
        </div>
      </div>
    );
  }
}

export default App;
