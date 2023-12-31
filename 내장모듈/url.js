const url = require('url');

const urlString = 'https://www.example.com:8080/path?query=string#fragment';

// URL 파싱
const parsedUrl = url.parse(urlString, true);     //url 문자열 -> url 객체로 변환
console.log('Parsed URL:', parsedUrl);

// URL 객체를 문자열로 변환
const formattedUrl = url.format(parsedUrl);       //url 객체 -> url 문자열로 변환
console.log('Formatted URL:', formattedUrl);

// 상대 경로 해석
const resolvedUrl = url.resolve('/images', 'logo.png');   //url 1, 2번째 인자 사이의 상대경로를 반환
console.log('Resolved URL:', resolvedUrl);