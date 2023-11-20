
input= `https://httpbin.org/get`

fetch(input, init)
  .then(response => {
    // 응답 처리
    return response.json(); // JSON 형식으로 파싱된 데이터 반환
  })
  .then(data => {
    // 파싱된 데이터 처리
    console.log(data);
  })
  .catch(error => {
    // 오류 처리
    console.error('Request failed:', error);
  });

