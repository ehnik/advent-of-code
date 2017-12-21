const fs = require('fs');
let input = fs.readFileSync("day-11-input.txt").toString('utf-8').trim().split(',');
let location = {ns: 0, ew: 0};

function calculateSteps(){
  let steps, yChange = Math.abs(location['ns']), xChange = Math.abs(location['ew']);

  if((yChange*2)<=xChange){
    steps = xChange;
  }
  else{
    steps = xChange + (yChange-(xChange*.5));
  }
  return steps;
}

function solve(array){
  let shortestRoute, maxSteps = 0;
  for(step of array){ //logs y- and x-axis changes for each step
    if(step.includes('e')){
      location['ew'] = location['ew']+1;
    }
    else if(step.includes('w')){
      location['ew'] = location['ew']-1;
    }
    if(step.includes('n')){
      if(step.length==2){ //adds 0.5 y-axis change for diagonal input
        location['ns'] = location['ns']+0.5;
      }
      else{
        location['ns'] = location['ns']+1;
      }
    }
    else if(step.includes('s')){
      if(step.length==2){
        location['ns'] = location['ns']-0.5;
      }
      else{
      location['ns'] = location['ns']-1;
      }
    }
    maxSteps = Math.max(maxSteps,calculateSteps());
  }
  shortestRoute = calculateSteps();
  return [shortestRoute,maxSteps];
}

solve(input)
