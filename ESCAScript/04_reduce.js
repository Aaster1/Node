const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc,num)=>{
  return acc+num;
},3)

console.log(sum)