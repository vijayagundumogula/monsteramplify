import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/card-list/search-box/search-box.component';

class App extends React.Component{

  constructor(){

    super();
    this.state={
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {

    this.setState({ searchField: e.target.value});

  }
  render(){

    const {monsters, searchField} = this.state;
    const filteredSearch = monsters.filter(monster =>
      
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <h1>Monsters Directory</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredSearch}/>
      
      </div>
    )
  }
}

export default App;
