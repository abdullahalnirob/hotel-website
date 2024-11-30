import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express()
app.use(bodyParser.json())
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})