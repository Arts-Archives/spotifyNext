const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV != 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    const port = process.env.PORT || 8080;

    server.listen(port, (err) => {
        if(err) throw err 
        console.log(`Ready on ${port}`)
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})