const fs = require('fs');

let input = fs.readFileSync("day-12-input.txt").toString('utf-8').split('\n')

let hash = {};

input.forEach( (line)=>{
  line = line.split(' <-> ')
  hash[line[0]] = line[1].split(',').map( (x)=> parseInt(x) )
})

function findGroup(pipe){
let pipes = [pipe]
let index = 0;
let end = false
while(index<pipes.length){
  let newNodes = hash[pipes[index]] //children of current node
  newNodes.forEach(function(node){ //pushes children of current node onto stack
    if(!pipes.includes(node)){
      pipes.push(node)
    }
  })
  index++;
  }
return pipes
}

console.log(findGroup(0).length) //solution 1

let pipes = []
let groupsNum = 0;
var iteration = 0;

for (const pipe in hash){ //determines number of groups by examining each pipe's connections
  let newGroup = false;
  let group = findGroup(pipe)
  group.forEach( (num) =>{
    if(!pipes.includes(parseInt(num))){
    pipes.push(parseInt(num))
    newGroup = true;
    }
  })
  if(newGroup==true){
    groupsNum++
  }
}
console.log(groupsNum) //solution 2
