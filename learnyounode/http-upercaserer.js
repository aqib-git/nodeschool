const http = require('http')

const server = http.createServer(function (req, res) {
	if (req.method !== 'POST') {
		return
	}

	req.on('data', function (data) {
		res.write(data.toString().toUpperCase())
	})

})

server.listen(process.argv[2])
