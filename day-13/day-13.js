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

let lastLayerDepth = parseInt(input[input.length-2][0]);
let severity = 0;
let currentDepth = 0; //depth of layer that packet is currently on
//part 2: let seconds = 0;
let scannerStart, currentRange;

while (currentDepth<=lastLayerDepth){
  console.log(currentDepth)

  if(hash.hasOwnProperty(currentDepth.toString())){ //checks if packet is on layer with scanner
    currentRange = hash[currentDepth.toString()] - 1 //subtract one from range to reflect position in range array (which must mirror )
    if(currentDepth%currentRange==0&&(currentDepth/currentRange)%2==0){
      severity += (currentDepth*(currentRange+1))
    }
  }
  currentDepth++;
}
console.log(severity)
