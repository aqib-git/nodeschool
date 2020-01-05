const http = require('http')

const output = []

for (let i = 2; i < process.argv.length; i++) {
	juggle(process.argv[i], i - 2)
}

function juggle(url, index) {
	http.get(url, function (response) {
		response.setEncoding('utf8')

		response.on('data', function (data) {
			if (!output[index]) {
				output[index] = ''
			}

			output[index] += data
		})

		response.on('end', function () {
			if (output.length < process.argv.length - 2) {
				return
			}

			for (let i = 0; i < output.length; i++) {
				console.log(output[i])
			}
		})
	})
}

