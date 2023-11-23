const ex = require(`express`)
const router = ex.Router()

router.get(`/`,(req,res)=>{
  res.render(`index`)
})



module.exports = router