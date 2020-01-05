const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function (err, files) {
	if (err) {
		return
	}

	for (var i = 0; i < files.length; i++) {
		const ext = path.extname(files[i])

		if (ext === '.' + process.argv[3]) {
			console.log(files[i])
		}
	}
});
