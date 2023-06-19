import { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  state = {
    message: ""
  };

  async componentDidMount() {
    const response = await fetch('/welcome');
    const body = await response.text();
    this.setState({message: body});
  }

  render() {
    const {message} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Welcome</h2>
              <p>{message}</p>
            </div>
        </header>
      </div>
    );

  }
}

export default App;
