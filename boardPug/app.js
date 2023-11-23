const ex = require(`express`)
const path = require(`path`)
const multer = require(`multer`)
const morgan = require(`morgan`)
const pug = require(`pug`)


const app = ex()



const board = require(`./routes/board`)
const index = require(`./routes/index`)




app.set(`port`,3000)

app.set(`view engine`,`pug`)

app.use(morgan(`dev`))
app.use(ex.urlencoded({extened:false}))
app.use(ex.json())

app.use(`/`,index)
app.use(`/board`,board)

app.use((req,res,next)=>{
  res.status(404).send(`NOT FOUND`)
})

app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).send(err.message)

})


app.listen(app.get(`port`), ()=>{
  console.log(`${app.get(`port`)}번 포트가 대기중입니다.`)
})