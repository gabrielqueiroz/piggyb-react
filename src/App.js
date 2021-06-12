import './App.css'
import React, {Component} from 'react';
import MenuToolbar from './components/menuToolbar';
import PiggyBanks from './components/piggyBanks';
import Container from '@material-ui/core/Container';
class App extends Component {
  state = {
    piggyBanks: []
  }

  componentDidMount() {
    fetch('/piggy_banks', {
      method: 'GET',
      headers: { 
        'Authorization': 'Basic Z2FicmllbC5xdWVpcm96QHNob3BpZnkuY29tOnBhc3N3b3Jk',
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
      <div>
        <MenuToolbar/>
        <Container maxWidth="lg">
          <main class="mdc-top-app-bar--fixed-adjust center">
            <PiggyBanks piggyBanks={this.state.piggyBanks} />
          </main>
        </Container>
      </div>
    )
  }
}

export default App;