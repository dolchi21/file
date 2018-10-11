const fs = require('fs')
const path = require('path')

module.exports = async (filename, data) => {
    if (data) {
        return write(filename, data)
    }
    return read(filename)
}

async function read(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, buffer) => {
            if (err) return reject(err)
            const result = normalize(filename, buffer)
            resolve(result)
        })
    })
}
async function write(filename, data) {
    return new Promise((resolve, reject) => {
        const str = serialize(filename, data)
        fs.writeFile(filename, str, err => {
            err ? reject(err) : resolve()
        })
    })
}

function normalize(filename, buffer) {
    const filenameData = path.parse(filename)
    switch (filenameData.ext) {
        case '.json': {
            return JSON.parse(buffer.toString())
        }
        default: {
            return buffer.toString()
        }
    }
}
function serialize(filename, data) {
    const filenameData = path.parse(filename)
    switch (filenameData.ext) {
        case '.json': {
            return JSON.stringify(data)
        }
        default: {
            return data
        }
    }
}