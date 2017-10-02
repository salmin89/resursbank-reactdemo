import React from 'react';
import PeopleList from './components/PeopleList';
import SelectedPerson from './components/SelectedPerson';

let items = [];

for (var i = 0; i < 90000; i++) {
  const rand = Math.floor(Math.random() * (9000 - 1) + 1);
  const item = {sort: rand, index: i};
  items.push(item);
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }

  handleSelectedPerson(person) {
    this.setState({selectedPerson: person});
    // console.log("Selected person:", person);
  }

  sortAll() {
    // console.log(this.state);
    const sortedItems = this.state.items.sort((a, b) => {
      return (parseInt(a.sort) >= parseInt(b.sort)) ? 1 : -1;
    });
    this.setState({items: sortedItems});
  }

  render() {

    return (
      <div className="container">

        <button onClick={() => { this.sortAll()}}>sort all</button>

        <ul className="list-group">
          {this.state.items.map(item => {
            return (
              <li className="list-group-item" key={item.index} data-sort={item.sort}>#{item.index} Item {item.sort}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
