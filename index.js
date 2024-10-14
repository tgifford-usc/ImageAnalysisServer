const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ description: "A man with glasses" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

