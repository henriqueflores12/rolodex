import { Component } from "react";
import React from "react";
import logo from "./spartan.jpg";
import "./App.css";
class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      shown: {}
    };
  }
  click = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(res => res.json())
      .then(index => {
        console.log("***my first fetch data***", index);
        this.setState({ results: index.results });
      });
  };
  hidden = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(res => res.json())
      .then(index => {
        console.log("***my first fetch data***", index);
        this.setState({ results: index.results });
      });
  };
  toggleDetails = uuid => {
    let newShown = { ...this.state.shown };
    newShown[uuid] = !newShown[uuid];
    this.setState({ shown: newShown });
  };
  render() {
    console.log(this.state.results);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.click}>click here to see list of people</button>

          {this.state.results.map(name => {
            return (
              <div key={name.name.first}>
                <div className="name">
                  <img alt="person" src={name.picture.thumbnail} />
                  <p className="title">{name.name.first}</p>
                  {this.state.shown[name.login.uuid] && name.name.last}
                  <p className="email">email {name.email}</p>
                  street address{" "}
                  <p className="adderess">{name.location.street.name}</p>
                  <p className="location">{name.location.street.number}</p>
                  phonenumber <p className="phone">{name.phone}</p>
                  <button onClick={() => this.toggleDetails(name.login.uuid)}>
                    {this.state.shown[name.login.uuid] ? "Hide" : "Show"}{" "}
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default NameList;
