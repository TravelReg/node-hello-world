import net from 'node:net'

const port = 3000
const host = '127.0.0.1'

const client = net.createConnection({ host, port }, () => {
  console.log('Application is running')
  client.end()
})

client.on('error', () => {
  console.log('Application is off')
  process.exit(1)
})
