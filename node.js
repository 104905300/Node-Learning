const os = require("os")
const {writeFile} = require("fs")

console.log(`Hello ${os.uptime()} World!`)

writeFile("./testing.txt", "I LOVE YOU!", (err,result) => {})

//sdfw fwf wff

