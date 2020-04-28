import React, { Component } from "react";
import { CardListComponent } from "./components/card-list/CardListComponent";
import { SearchBoxComponent } from "./components/searchbox/SearchBoxComponent";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    this.setState({ monsters: users });
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBoxComponent
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}
