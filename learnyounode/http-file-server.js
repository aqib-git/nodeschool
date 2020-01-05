const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {  
   return fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(process.argv[2])

