const express = require('express')
const app = express()

let port
if(process.env.PORT) port = process.env.PORT
else port = 8000

let backendMessage
if(process.env.BACKEND_MESSAGE) backendMessage = process.env.BACKEND_MESSAGE
else backendMessage = 'Mensaje por defecto.'

app.get('/', (req, res) => {
    res.send(`Hola mundo. ${backendMessage}`)
})

app.get('/:message', (req, res) => {
    res.send(`Hola mundo. Su mensaje fue: "${req.params.message}". ${backendMessage}`)
})

app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`)
})