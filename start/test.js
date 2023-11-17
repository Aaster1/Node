function welcome(){
  console.log(`Hello Node.js~!`);
}

welcome()

// 
//node 자바스크립트 실행
//>node(파일경로)
// 



let num = 1;

const promise = new Promise((res,rej) => {
  if(num > 0 ? true:false) res(`성공`)
  else(rej(`실패`))
})






promise.then((msg)=>{
  console.log(msg)
}).catch((error)=>{
  console.log(error)
}).finally(()=>{
  console.log(`무조건`)
})