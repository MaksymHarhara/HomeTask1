//const { Buffer } = require("node:buffer");
const fs = require("fs");
const csv = require("csvtojson");
const { pipeline } = require("stream");

const readStream = fs.createReadStream('./nodejs-hw1-ex1.csv');
const writeStream = fs.createWriteStream('./nodejs-hw1-ex2.txt');

pipeline(readStream, csv(), writeStream, processFinishedPipeline);

function processFinishedPipeline(error) {
    if(error) {
        console.error(error)
    }else {
        console.log('File was processed successfully')
    }
}

/*
csv().fromFile("nodejs-hw1-ex1.csv")
    .then((jsonObj)=>{
        //const buf1 = Buffer.from(jsonObj);
        fs.writeFileSync('nodejs-hw1-ex2.txt', jsonObj, (err) => {
            if (err) console.log('Error');
        });
        console.log(jsonObj);
    }); */