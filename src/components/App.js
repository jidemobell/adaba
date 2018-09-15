import React from 'react';


class App extends React.Component {
  componentDidMount() {
    return fetch('http://localhost:3000/skills', {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Under Maintenace</h1>
          <p>Just messing around with data</p>
        </div>
      </div>
    );
  }
}

export default App;
