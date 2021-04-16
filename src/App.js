import logo from './logo.svg';
import './App.css';

// API documentation: https://documenter.getpostman.com/view/3281832/SzmZeMLC
const BASE_URL = 'https://getpantry.cloud/apiv1/pantry/ecf03d36-db58-4d1f-b2d2-be3de4515084/basket/';

function App() {
  return (
    <div className="container">
      <h1 className="header">Secrets Locker</h1>
      {/* read */}
      <h2 className="header">Get data:</h2>

      {/* create/update/delete */}
      <h2 className="header">Manage data:</h2>
    </div>
  );
}

export default App;
