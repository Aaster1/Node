//uncaughtException : 예기치 못한 모든 에러

//프로세스 과정 중에서 예기치 못한 에러가 발생하면 모두 다 console.log로 err를 띄워줍니다!!
process.on(`uncaughtException`,err=>{
  console.log(`예기치 못한 에러`,err)
})


setInterval(()=>{

  throw new Error(`에러 강제 발생`)

},1000)