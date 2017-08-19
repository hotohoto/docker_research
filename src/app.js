import express from 'express'
import os from 'os'

const app = express()

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/plain')
  res.send(
    `hello world!\n` +
    `hostname: ${os.hostname()}\n` +
    `HELLO_INSTANCE_TYPE: ${process.env.HELLO_INSTANCE_TYPE}\n` +
    `HELLO_MASTER_ADDRESS: ${process.env.HELLO_MASTER_ADDRESS}\n`
  )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
