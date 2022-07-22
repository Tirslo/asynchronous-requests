const express = require('express')
const router = require('./routes')
const app = express()

const PORT = process.env.PORT || 5500

app.use(express.json())
app.use('/requests', router)
app.listen(PORT, () => {
  console.log(`Asynchronous Requests running on ${PORT}`)
})
