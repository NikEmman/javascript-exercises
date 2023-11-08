const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {return arr.reduce((sum,current)=>sum+current,0)

	
};

const multiply = function(arr) {return arr.reduce((sum,current)=>sum*current,1)

};

const power = function(a,b) {return a**b;
	
};

const factorial = function(a) {
  if(a===0 || a===1 ){return 1;}
  
  for(let i=a-1;i>=1;i--){
    a*=i;
  }
  return a;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
