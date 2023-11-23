const ex = require(`express`)
const router = ex.Router()

let boardList = [
  {title:`제목1`, writer:`작성자1`, content:`내용1`},
  {title:`제목2`, writer:`작성자2`, content:`내용2`},
  {title:`제목3`, writer:`작성자3`, content:`내용3`}
]

router.get(`/`,(req,res)=>{
  console.log(`보드리스트 입니다 : ${boardList}`)
  res.render(`board`,{boardList})

})

router.post(`/update`,(req,res)=>{
  let {title,writer,content,index} = req.body
  boardList[index] = {title,writer,content}
  res.redirect(`/board/`+index)
})

router.get(`/update/:index`,(req,res)=>{
  let index = req.params.index
  let board = boardList[req.params.index]
  res.render(`update`,{board,index})
})

router.get(`/insert`,(req,res)=>{
  res.render(`insert`)
})

router.post(`/insert`,(req,res)=>{
  console.log(req.body)
  console.log(req.params)
  let {title,writer,content} = req.body
  let newBoard = {title,writer,content}
  boardList.push(newBoard)
  res.redirect(`/board`)
})


router.post(`/delete`,(req,res)=>{
  console.log(`여기요`+req.body)
  let index = req.params.index
  boardList.splice(index,1)
  res.redirect(`/`)
})

router.get(`/:index`,(req,res) =>{
  let index = req.params.index
  let board = boardList[index]
  res.render(`read`,{board,index})
})

module.exports = router