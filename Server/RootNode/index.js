const express = require('express')
const roomRoutes = require('./routes/room'); 

const app = express()
const port = 3000

app.use(express.json());

app.use('/', roomRoutes); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
