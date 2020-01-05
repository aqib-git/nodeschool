const fs = require('fs')
const path = require('path')

module.exports = function (directory, ext, callback) {
	fs.readdir(directory, function (err, files) {
		if (err) {
			callback(err)

			return
		}

		let output = files.filter(function (file) {
			return path.extname(file) === '.' + ext
		})

		callback(null, output)
	})
}
