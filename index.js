const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 5000)

