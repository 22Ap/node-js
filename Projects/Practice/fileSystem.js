const fs=require("fs");

//------writing in files------
//synchronmous call to write in the file test.txt in same directory.
fs.writeFileSync('./test.txt', 'Anupam Kumar 21BCS9660 \n');

//whenever we call the function agian the file is overridden

//asynchronous call to write in the file test.txt in same directory.
fs.writeFile('./test.txt', 'Some content to write', 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File has been written successfully');
  });

//--------Reading from files-------
//reading files synchronously
const res=fs.readFileSync("./contacts.txt", "utf-8");
console.log(res);
//synchronous call is able to return the rsult in a variable

// //but asynchronous call is not able to return the result, it uses callback to throw results.
fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("Erroe", err);
    }
    else{
        console.log(result);
    }
});

// //appending text to files, this will append not overwrite
fs.appendFileSync('./test.txt', `${Date.now()}Stamped\n`);

// // copying data from one file to another
fs.cpSync('./test.txt', './copy.txt');
// //above code makes a text file name copy having data of test.txt;

// //deleting a file 
fs.unlinkSync('./test.txt');
// //above code deletes the file test.txt


//printing stats of a file
console.log(fs.statSync('./contacts.txt'));

//similarly we can do so many things using fs, like making directories, deleting etc.