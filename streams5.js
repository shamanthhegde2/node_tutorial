//streams is more powerful than normal read file system because the stream is used to read the file when its on process of executing and doesn't wait until whole file is read like noeaml readFile or writeFIle
//read file
// const fs = require('fs')

// const read = fs.createReadStream('./docs/blog2.txt', (encoding = 'utf8'))
//read.on is like a listener which waits for data and give to us as chunk
// read.on('data', (chunk) => {
//   console.log('--New CHunk--')
//   console.log(chunk)
// })
//to write files
// const writeStream = fs.createWriteStream('./docs/blog3.txt')

// writeStream.write('singam singam')

//to read from one file and write into another file we use pipe and it works only when both read and write are stram types
// const read = fs.createReadStream('./docs/blog2.txt', (encoding = 'utf8'))
// const writeStream = fs.createWriteStream('./docs/blog3.txt')
// read.pipe(writeStream)
