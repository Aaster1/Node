const http2 = require(`http2`);
const fs = require(`fs`);

http2.createSecureServer({
  cert: fs.readFileSync(`server-cert.pem`),
  key : fs.readFileSync(`server-key.pem`),
  ca:[
    fs.readFileSync(`contoso.crt`),
    fs.readFileSync(`fabrikam.crt`)
  ]
}, (req,res)=>{
  res.writeHead(200,{'Content-Type':`text/html; charset=utf-8`})
  res.write(`<h1>Hello Node!</h1>`)
  res.end(`<p>Hello Server!</p>`)
})
.listen(443,()=>{
  console.log(`403포트 서버가 준비되었습니다.`)
})