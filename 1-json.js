const fs = require("fs");



const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Jp";
data.age = 20;
console.log(data);
