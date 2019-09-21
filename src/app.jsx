import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }

  componentWillMount() {
    Axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <center><div className="card rounded-lg shadow-lg">
            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 spots to see in San Diego, Califonia.</p>
          </div></center>
        </div>
        <div className="container">
          {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />
            ))
          }
        </div>
      </div>

    );
  }
}

export default App;
