import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateChef = (props) => {
  const { id } = props.match.params;
  const { chefs, setChefs } = props;

  const [chef, setChef] = useState('');

  useEffect(() => {
    const startName = chefs.reduce((acc, item) => {
      if (item.id === id) {
        acc = item.name;
      }
      return acc;
     }, '');
    setChef(startName);
  }, [])

  const updateChef = async () => {
    const response = await axios.put('/api/chefs', { name: chef, id });
    chefs.map(cook => {
      if (cook.id === id) {
        cook.name = response.data.name;
      }
      return cook;
    })
    setChefs([...chefs]);
  }

  return (
    <div>
      <h1>Edit Chef</h1>
      <form onSubmit={ev => ev.preventDefault()}>
        <input type="text" value={chef} onChange={ev => setChef(ev.target.value)} />
        <button type="button" onClick={() => updateChef()}>Update</button>
      </form>
    </div>

  )
}

export default UpdateChef;
