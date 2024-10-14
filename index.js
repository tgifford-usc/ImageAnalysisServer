require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

// allows all cross-origin requests
app.use(cors())


app.get('/', async (req, res) => {
  const queryURL = "https://www.google.com/search?q=banana";
  const response = await fetch(queryURL);
  //const result = await response.json();
  console.log(response);
  res.json({ description: "A man with glasses" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

