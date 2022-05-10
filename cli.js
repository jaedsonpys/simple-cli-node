const fs = require('fs')
const { join } = require('path')

const argument = process.argv.splice(2, process.argv.length - 1)

function searchFile(extension, dirpath = '.') {
    const files = fs.readdirSync(dirpath)

    files.map((filename => {
        const fullFilePath = join(dirpath, filename)
        const fileInfo = fs.lstatSync(fullFilePath)
        if(!fileInfo.isDirectory()) {
            if(filename.indexOf(extension) !== -1) {
                console.log(fullFilePath)
            }
        }
    }))
}

if(argument.length == 2) {
    searchFile(argument[0], argument[1])
} else {
    searchFile(argument[0])
}