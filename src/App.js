import axios from 'axios';
import { useState } from 'react';
import './App.css';

// API documentation: https://documenter.getpostman.com/view/3281832/SzmZeMLC
const BASE_URL = 'https://getpantry.cloud/apiv1/pantry/ecf03d36-db58-4d1f-b2d2-be3de4515084/basket/';

const randomChar = () => String.fromCharCode(Math.floor(97 + Math.random()*26));

function App() {
  const [body, setBody] = useState('');
  const [baskets, setBaskets] = useState([]);

  const createBasket = () => {
    // four random chars as name
    const basketName = randomChar() + randomChar() + randomChar() + randomChar();
    const basket = {name: basketName, body: body};
    axios.post(BASE_URL + basketName, basket.body)
      .then(() => setBaskets([...baskets, basket]))
      .catch(() => console.log('failure'));
  }

  return (
    <div className="container">
      <h1 className="header">Secrets Locker</h1>
      {/* read */}
      <h2 className="header">Get data:</h2>

      {/* create/update/delete */}
      <h2 className="header">Manage data:</h2>
      <h3 className="header">Create New:</h3>
      <textarea placeholder="Data" onChange={e => setBody(e.target.value)} />
      <button onClick={createBasket}>Create</button>

      <h3 className="header">Update/Delete:</h3>
      {baskets.map(basket => (
        <div className="basket container">
          <h4>{basket.name}</h4>
          <p>{basket.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
