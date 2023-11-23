const ex = require(`express`)
const path = require(`path`)
const morgan = require(`morgan`)
const dotenv = require(`dotenv`)
const {sequelize} = require(`./models`)

dotenv.config()

const app = ex();

const board = require(`./routes/board`)
const index = require(`./routes/index`)

app.set(`port`,process.env.PORT||3001)
app.set(`view engine`,`pug`)

sequelize.sync({force:false})
.then(()=>{
  console.log(`DATABSE CONNECTED`)
})
.catch((err)=>{
  console.error(err)
})



app.use(morgan(`dev`))
app.use(ex.urlencoded({extened:false}))
app.use(ex.static(path.join(__dirname,`public`)))
app.use(ex.json())

app.use(`/`,index)
app.use(`/board`,board)

app.use((req,res,next)=>{
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`)
  error.status = 404
  next()
})

app.use((err,req,res,next)=>{
  console.error(err.message)
  res.locals.message=err.message;
  res.locals.error = process.env.NODE_ENV !=='production'? err:{}
  res.status(err.status || 500)
  res.render(`error`)
})

app.listen(app.get(`port`),()=>{
  console.log(app.get(`port`),'번 포트가 대기중입니다.')
})