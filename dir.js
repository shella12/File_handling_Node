const fs= require ('fs');

const createNewDirectory = (directoryName) => {
    if(!fs.existsSync(directoryName)){
        fs.mkdir(directoryName,(err)=>{
            if(err) throw err;
        });
        console.log(`created directory ${directoryName}`)
    }
}

const deleteNewDirectory = (directoryName) => {
if(fs.existsSync(directoryName)){
  fs.rmdir(directoryName,(err)=> {
    if(err) throw err;
  })
  console.log(`deleted directory ${directoryName}`)
}
}

createNewDirectory('./new');
deleteNewDirectory('./new')

