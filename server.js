const fs = require('fs').promises;
const path = require('path');

// Delete file
const deleteFile = async () => {
  try{
    await fs.unlink(path.join(__dirname,"Files", "butterflies.txt"));
  }
  catch(err) {
throw ("Uncought exception:",err);
  }
}

// Read file 
const readFile = async () => {
    try {
      const data = await fs.readFile(path.join(__dirname,"Files","butterflies.txt"),"utf8");
      console.log(data)
    }
    catch(err) {
     throw("Uncought exception while reading file:",err);
    }
}

//write file
const writeFile = async (addData) => {
    try {
       await fs.writeFile(path.join(__dirname,"Files","butterflies.txt"), addData);
    }
    catch(err) {
     throw("Uncought exception while writing to the file:",err);
    }
}

// Append data to existing file
const appendData = async (filename,addData) => {
    try {
       await fs.appendFile(path.join(__dirname,"Files",filename), addData);     
    }
    catch(err) {
     throw("Uncought exception while appending file:",err);
    }
}

const quotes = `If you want to fly, give up everything that weighs you down. 
How will you know you can fly if you never spread your wings?

 “The butterfly can only become beautiful if the caterpillar stays brave.`

writeFile(quotes);
readFile();
appendData("butterflies.txt", "\n\n Well we can try flying");
// deleteFile();