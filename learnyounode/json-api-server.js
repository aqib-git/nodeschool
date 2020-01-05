const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
	let route = new url.URL(req.url, 'http://example.com')
		
	switch(route.pathname) {
		case '/api/parsetime':
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(parseTime(route.searchParams.get('iso')))

			break;
		case '/api/unixtime':
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(unixTime(route.searchParams.get('iso')))
			
			break;
		default:
			console.log('Unknow route: ' + route.pathname)
	}
})

function parseTime(value) {
	let date = new Date(value)

	return JSON.stringify({
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	})
}

function unixTime(value) {
	 let date = new Date(value)

        return JSON.stringify({
                unixtime: date.getTime(),
        })
}

server.listen(process.argv[2])
