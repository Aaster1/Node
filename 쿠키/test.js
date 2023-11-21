
const http = require('http');
const fs = require('fs').promises;
const path = require('path');


//매개변수의 디폴트를 선언해줬습니다.
//=>{} 중괄호가 안열린 이유는 한 줄이기 때문입니다.
//쿠키를 객체 형태로  parsing 하는 과정입니다.
const parseCookies = (cookie = '') =>
  cookie                          //cookie1=value1; cookie2=value2;
    .split(';')                   //[0] cookie1=value1 [1] cookie2 =value2
    .map(v => v.split('='))       //[[0] cookie1 [1]value1],[0]cookie2 [1]cookie2
    .reduce((acc, [k, v]) => {    
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8080');
    const name = url.searchParams.get('name');
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  }else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });