 // src/App.js
    
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
          <div class="container mt-4">
            <PiggyBanks piggyBanks={this.state.piggyBanks} />
          </div>
        )
      }
    }
    
    export default App;