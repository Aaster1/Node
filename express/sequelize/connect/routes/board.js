const ex = require(`express`)
const router = ex.Router()
const Board = require(`../models/board`)


router.get(`/`, async (req,res)=>{
  let boardList = await Board.findAll()
  console.log(`보드리스트 입니다 : ${boardList}`)
  res.render(`board`,{boardList})

})

router.post(`/update`, async (req,res)=>{
  let {title,writer,content,boardNo} = req.body
  await Board.update({title,writer,content},{where:{board_no:boardNo}})
  res.redirect(`/board/`+boardNo)
})

router.get(`/update/:boardNo`, async (req,res)=>{
  let boardNo = req.params.boardNo
  let board = await Board.findByPk(boardNo)
  res.render(`update`,{board})
})

router.get(`/insert`,(req,res)=>{
  res.render(`insert`)
})

router.post(`/insert`, async (req,res)=>{
  let {title,writer,content} = req.body
  await Board.create({title,writer,content})
  res.redirect(`/board`)
})


router.post(`/delete`, async (req,res)=>{
  console.log(`여기요`+req.body)
  let boardNo = req.body.boardNo
  await Board.destroy({where:{board_no:boardNo}})
  res.redirect(`/`)
})

router.get(`/:boardNo`,async (req,res) =>{
  let boardNo = req.params.boardNo
  let board = await Board.findByPk(boardNo)
  res.render(`read`,{board})
})

module.exports = router