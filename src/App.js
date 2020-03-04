import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Chefs = ({ chefs }) => {
  console.log(chefs);
  return (
    <div id="chef-container">
      <h2>chefs</h2>
      <ul>
        {chefs.map(cook => {
        return (
          <li key={cook.id}>{cook.name}</li>
        )
      })}
      </ul>
    </div>
  )
}


const App = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios.get('/api/chefs')
      .then(response => setChefs(response.data));
  }, []);

  return (
    <div>
      <h1>Acme Bakery</h1>
      <Chefs chefs={chefs} />
    </div>
  )
}

export default App;
