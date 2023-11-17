
//객체 리터럴
//✔속성축약
let nam =`aloha`;
let age = 20;


//기존 객체 정의 문법
let person1 = {

  name : nam,
  age : age
}
//향상된 객체 정의 문법
let person2 = {

  nam,
  age
}

console.log(person1)
console.log(person2)







//✔계산된 속성명
let key = `gender`;

let person = {
  name : `aloha`,
  age:25,
  [key] : female
}

console.log(person)
//출력
//  {name : `aloha`, age:25, gender:`female`}






//✔메소드 축약

let obj1 = {
  method1:  function(){
    console.log(`method1:function(){} : 기존 방식으로 메소드 정의`)
  }
}

let obj2 = {
  method1(){
    console.log(`method1(){} : 향상된 문법으로 메소드 정의`)
  }
}

obj1.method1()
obj2.method1()
