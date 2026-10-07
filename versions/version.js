const child_process = require('child_process')
const path = require('path')
const targetPath = path.join(__dirname, '1.01.0-alpha', 'main.js')
const child = child_process.fork(targetPath)
child.on('exit', (code) => {
    console.log(`Child process exited with ${code}`)
})