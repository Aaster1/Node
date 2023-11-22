const express = require(`express`)
const router = express.Router()

  router.get(`/set`, (req,res)=>{
    res.cookie(`username`,`aster`,{maxAge:1000*60*60*24*7,httpOnly:true})
    res.render(`cookie-set`)
  })
  router.get(`/`,(req,res)=>{
    res.render(`cookie-view`,{username : req.cookies.username})
  })

module.exports = router