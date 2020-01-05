const net = require('net')  

const server = net.createServer(function (socket) {  
	socket.end(getCurrentTime())  
})  

function getCurrentTime() {
	const zeroFill = (value) => (value >= 0 && value <= 9 ? '0' + value : value)
	
	const date = new Date() 

	let year  = date.getFullYear()
     	let month = zeroFill(date.getMonth() + 1)
     	let day   = zeroFill(date.getDate())
    	let hour  = zeroFill(date.getHours())
     	let min   = zeroFill(date.getMinutes())

	return year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n'
}

server.listen(process.argv[2])  

