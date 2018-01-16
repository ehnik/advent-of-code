//do seconds mod depth to find position at end of first second
const fs = require('fs');

let input = fs.readFileSync("day-13-input.txt").toString('utf-8').split('\n')
let hash = {};

input = input.map( (line) => { //converts input to array of arrays, populates hash
  layer = line.split(': ')
  layer[1] = parseInt(layer[1])
  hash[layer[0]] = layer[1]
  return layer
})

let traversalTime = parseInt(input[input.length-2][0]);
let scannerStart, currentRange, currentDepth;
let finalOffset = null;
let offset = 0;

while(!finalOffset){
    secondsElapsed = offset;
    let caught = 0;
    while (secondsElapsed<=(traversalTime+offset)){
      currentDepth = secondsElapsed - offset //depth of current layer
      if(hash.hasOwnProperty(currentDepth.toString())){ //checks if packet is on layer with scanner
        currentRange = hash[currentDepth.toString()] - 1 //range of current layer
        if(secondsElapsed%currentRange==0&&(secondsElapsed/currentRange)%2==0){
          caught++ //can't use severity to assess if packet has been caught, as a catch at depth 0 has severity of 0
        }
      }
    secondsElapsed++;
  }
  if(severity==0){
    console.log(offset)
    return finalOffset = offset;
  }
  else{
    offset++
  }
}
