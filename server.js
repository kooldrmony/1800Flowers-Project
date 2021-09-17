const express = require('express');
const app = express();
const port = 3001;
const fetch = require('node-fetch');
const cors = require('cors')

app.use(cors());

app.get('/', async (req, res, next) => {
  
  
  const url = `http://jsonplaceholder.typicode.com/posts`;
  const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
          Accept: 'application/json',
      }
  };

  const response = await fetch(url, options);
  const body = await response.json();

  res.send(body)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})