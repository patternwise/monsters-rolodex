import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box.component/search-box.component';

class App extends Component
{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:  users}))
  }

  render()
  {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      //console.log(filteredMonsters);
    return(<div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder  = 'Search Monsters'
      handleChange = {e => this.state({ searchField: e.target.value})}/>
      {/* <CardList user="Manisha"/> */}
   {/* <input type='search' placeholder='search monster' 
    // onChange={e => this.setState({ searchFiled: e.target.value })}/>
    onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))}/> } */}
    <CardList monsters={filteredMonsters}>
    </CardList>
  </div>)
  }
}



export default App;
