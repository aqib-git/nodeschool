const fs = require('fs')

let lines = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1

console.log(lines)
