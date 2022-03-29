const express = require('express')
const app = express()
const path = require('path');
const port = 4040

// Ao receber requisição em http://127.0.0.1:4040/ chama o http://127.0.0.1:8080/
app.get("/", (req, res) => {
  res.status(301).redirect("http://127.0.0.1:8080/")
})

// Ao receber requisição em http://127.0.0.1:4040/ chama o http://127.0.0.1:8080/desafio-docker
app.get("/desafio-docker", (req, res) => {
  res.status(301).redirect("http://127.0.0.1:8080/desafio-docker.html")
})

app.listen(port, () => {
  console.log(`Your first Express app is successfully running! You can view the output of this app at http://localhost:${port}`)
})
