const fs = require('fs');
const path = require ('path');

const readStream = fs.createReadStream(path.join(__dirname,"Files","lorem.txt"),"utf8");
const writeStream = fs.createWriteStream(path.join(__dirname,"Files","new_lorem.txt"));

// Following method writes the read chunk of data from readStream to writeStream

// readStream.on('data', (dataChunk) => {
// writeStream.write(dataChunk);
// });

//better way of writing the read data to a new file. It functions the same as above method 

readStream.pipe(writeStream);