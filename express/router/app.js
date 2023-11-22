
//모듈 import
const express = require(`express`)
const morgan = require(`morgan`)
const cPar = require(`cookie-parser`)
const session = require(`express-session`)
const path = require(`path`)
const nunjucks = require(`nunjucks`)
const cors = require(`cors`)
const port = 3000

//라우터 import
// const a = require(`./routes/a`)
// const b = require(`./routes/b`)
// const c = require(`./routes/c`)
const index = require(`./routes/index`)
const users = require(`./routes/users`)
const cookie = require(`./routes/cPar`)



//미들웨어 설정
const app = express();
app.set('port', process.env.PORT || port)


//템플릿 설정
app.set(`view engine`,`html`)
nunjucks.configure(`views`, {
express:app,
watch:true
})


//모건 세팅
app.use(morgan(`dev`))

//모든 경로로부터의 요청 허용

//정적 파일 경로 지정
app.use(`/`,express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded ({extended : false}))
app.use(cPar())
app.use(session({
  secret:`your-secret-key`,
  resave:false,
  saveUninitialized:true
}))


//라우터 설정
app.use(`/`,index)
app.use(`/users`,users)
app.use(`/cookie`,cookie)
// app.use(`/a`,a)
// app.use(`/b`,b)
// app.use(`/c`,c)


//전역매핑 : 위 라우팅 설정경로에 걸리지 않은 경우
app.use((req,res,next)=>{
  res.status(404).send('NOT FOUND')
})

//에러 핸들러

app.use((err,req,res,next)=>{
  console.error(err)
  res.status(500).send(err.message)
})


//포트 설정 및 요청 대기
app.listen(app.get('port'),()=>{
  console.log(app.get('port'), '번 포트에서 대기중입니다.')
})