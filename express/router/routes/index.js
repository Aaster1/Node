const express = require(`express`)

const router = express.Router()

//요청 경로에 파라미터 매핑 방법 -> `/:파라미터명`
router.get((req,res)=>{
  res.render('index',{username:req.cookies.username})
})

//app.js에서 require로 부르기 위해선 이게 필수입니당
module.exports = router