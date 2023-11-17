//🤞구조분해할당

//✔객체의 구조 분해 할당
let person = {
  nam:`aloha`,
  age:25,
  gender:`female`,
  gender2:`male`
}


const{nam,age,...rest} = person;

console.log(nam)
console.log(age)
console.log(rest)


//  출력
//  `aloha`, 25, {gender : `female`, gender2 : `male`}


let numbers = [1,2,3,4,5]

//배열의 구조 분해 할당
let [a,b,...c] = numbers

console.log(a)
console.log(b)
console.log(c)

//  출력
//  1, 2, [3,4,5]





//✔매개변수 구조분해 할당

function functionName({param1, param2, param3}){
  console.log(`param1 : ${param1}, param2 : ${param2}, param3 : ${param3}`)
}

let params = {
  param1:1,
  param2:2,
  param3:3
}

let functionArrow = (({param2,param1,param3}) => {
  console.log(`param1 : ${param1}, param2 : ${param2}, param3 : ${param3}`)
})

functionName(params)
functionArrow(params)



