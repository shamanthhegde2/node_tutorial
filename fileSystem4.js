//This kind approach to read files is useful when content in the file is small
//Always asynchronous functions have a callback() which fire out when a task is done
//reading files
//parameter data would give values in buffer inorder to understood by us we need to conver it into string
//reading
const fs = require('fs')
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// })
//of the file doesn't exist it throws a error so lets introduce a method in fs called as exitsSync which checks whether a file or directory exists and returns a boolean value

// if (fs.existsSync('./docs/blog1.txt')) {
//   fs.readFile('./docs/blog1.txt', (err, data) => {
//     console.log(data.toString())
//   })
// }

//writing a file
//it overwrites the content in existing file or creates a new file

// fs.writeFile('./docs/blog1.txt', 'hallo chingidichu', () => {
//   console.log('written')
// })

//deletefolder
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log('error')
//     }
//     console.log('sucessfully created')
//   })
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log('error')
//     }
//     console.log('sucessfully deleted')
//   })
// }
//deletefile
// if (fs.existsSync('./docs/blog2.txt')) {
//   fs.unlink('./docs/blog2.txt', () => {
//     console.log('successfully delted')
//   })
// }
