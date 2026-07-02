import express from 'express'
import os from 'os'

const app = express()

const PORT = process.env.PORT || 3000
const VERSION = 'v1.0.0'

app.get('/', (req, res) => {
  res.send(`
    <h1>My Node.js Application</h1>
    <p><strong>Status:</strong> Running</p>
    <p><strong>Version:</strong> ${VERSION}</p>
    <p><strong>Server Time:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>Hostname:</strong> ${os.hostname()}</p>
    <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
  `)
})

app.get('/xyz', (req, res) => {
  res.send('Hello xyz')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})