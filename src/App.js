import axios from 'axios';
import { useState } from 'react';
import './App.css';

// API documentation: https://documenter.getpostman.com/view/3281832/SzmZeMLC
const BASE_URL = 'https://getpantry.cloud/apiv1/pantry/ecf03d36-db58-4d1f-b2d2-be3de4515084/basket/';

const randomChar = () => String.fromCharCode(Math.floor(97 + Math.random() * 26));

function App() {
  const [body, setBody] = useState('');
  const [secretIndex, setSecretIndex] = useState(-1);
  const [secrets, setSecrets] = useState([]);

  const createSecret = () => {
    // four random chars as name
    const secretName = randomChar() + randomChar() + randomChar() + randomChar();
    const secret = { name: secretName, body: body };
    axios.post(BASE_URL + secretName, secret)
      .then(() => {
        setSecrets([...secrets, secret]);
        setBody('');
      })
      .catch(() => console.log('create failure'));
  }

  const updateSecret = () => {
    const secret = {name: secrets[secretIndex].name, body: body};
    axios.put(BASE_URL + secrets[secretIndex].name, secret)
      .then(() => {
        secrets[secretIndex].body = body;
        setSecrets([...secrets]);
        setSecretIndex(-1);
        setBody('');
      })
      .catch(() => console.log('edit failure'));
  }

  const deleteSecret  = index  => () =>  {
    axios.delete(BASE_URL + secrets[index].name)
      .then(() =>{
        let tmp = [];
        for(let i = 0; i < secrets.length; i++){
          if(i !== index){tmp.push(secrets[i]);}
        }
        setSecrets(tmp);
        setSecretIndex(-1);
        setBody('');
      })
      .catch((e) => console.log(e));
  }


  const onSave = () => {
    if (secretIndex < 0) {
      createSecret();
    } else {
      updateSecret();
    }
  }

  const editSecret = index => () => {
    setSecretIndex(index);
  }

  const cancelEdit = () => {
    setSecretIndex(-1);
    setBody('');
  }

  return (
    <div className="container">
      <h1 className="header">Secrets Locker</h1>
      <p className="description">
        This is a shared secrets locker.
        Anyone else can come to this page and access a secret given the secret name.
        Only you can edit your secrets as long as you are on this page.
        Secrets remain unless you delete them manually.
      </p>
      {/* read */}
      <h2 className="header">Get data:</h2>

      {/* create/update/delete */}
      <h2 className="header">Manage data:</h2>
      <h3 className="header">
        {secretIndex < 0 ? 'Create New:' : `Edit secret '${secrets[secretIndex].name}':`}
      </h3>
      <textarea placeholder="Data" value={body} onChange={e => setBody(e.target.value)} />
      <button onClick={onSave}>Save</button>
      {secretIndex >= 0 && (<button onClick={cancelEdit}>Cancel edit</button>)}

      <h3 className="header">Update/Delete:</h3>
      {
        secrets.map((secret, i) => (
          <div key={secret.name} className="secret container">
            <h4>{secret.name}</h4>
            <p>{secret.body}</p>
            <button onClick={editSecret(i)}>Edit</button>
            <button onClick={deleteSecret(i)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
