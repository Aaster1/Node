//이벤트 모듈 가져오기
const EventEmitter = require('events');

//이벤트 발생자 생성
const myEvent = new EventEmitter();

//이벤틑 생성합니다. 리스너 등록
//이벤트 발생자객체.addListener('이벤트이름', 콜백함수)
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});

//이벤트를 추가합니다.
myEvent.on('event2', () => {
  console.log('이벤트 2');
});

//같은 이름으로 두개의 이벤트를 정의하니 순서대로 모두 실행됩니다.
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});

//이벤트 발생 시, 한 차례만 실행됩니다.
myEvent.once('event3', () => {
  console.log('이벤트 3');
}); // 한 번만 실행됨


//이벤트를 호출합니다.
myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
  console.log('이벤트 4');
});

//event4에 걸린 모든 이벤트를 삭제합니다.
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안 됨


//아래와 같이 함수를 정의하며 사용할 수 있다는 예시입니다.
const listener = () => {
  console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));