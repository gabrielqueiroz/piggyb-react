import './App.css'
import logo from './piggy_bank_white.png';
import React, {Component} from 'react';
import PiggyBanks from './components/piggyBanks';
class App extends Component {
  state = {
    piggyBanks: []
  }

  componentDidMount() {
    fetch('/piggy_banks', {
      method: 'GET',
      headers: { 
        'Authorization': 'Basic ' + process.env.BASIC_AUTH,
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ piggyBanks: data.piggy_banks })
    })
    .catch(console.log)
  }

  render() {
    return (
      <main>
        <header class="p-3 bg-dark text-white">
          <div class="container">
            <img src={logo} className="App-logo me-2" alt="logo" />
            <b>Piggy B - React</b>
          </div>
        </header>
        <div class="container mt-4">
          <PiggyBanks piggyBanks={this.state.piggyBanks} />
        </div>
      </main>
    )
  }
}

export default App;