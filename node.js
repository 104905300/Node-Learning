const os = require("os")
const {writeFile} = require("fs")

console.log(`Hello ${os.uptime()} World!`)

writeFile("./testing.txt", "I LOVE YOU!", (err,result) => {})
writeFile("./testing2.txt", "I LOVE YOU TOO!", (err,result) => {})

//comment

