let output = 0

for(let i = 2; i < process.argv.length; i++) {
	output += Number(process.argv[i])
}

console.log(output)
