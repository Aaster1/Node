//Promise
//프로미스를 사용한 타이머 예시 코드
function delay(ms){
  return new Promise((res,rej)=>{
    //setTimeout 함수를 사용하여 비동기 작업 모방
    setTimeout(()=>{
      //ms 시간이 지난 후, resolve를 호출하여 프로미스 이행
      res(`Waited for${ms} milliseconds`)
    },ms)

    //10초짜리 로직이 있다면, setTimeout의 2초는 처음이 기준일까요? 끝이 기준일까요.처음이겠죠?

  })
}

//프로미스를 이용한 타이머 사용
delay(2000)
.then((result) =>{
  console.log(result)
}).catch((error)=>{
  console.error(error)
})