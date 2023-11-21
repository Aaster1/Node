const fs1 = require(`fs`)
const fs2 = require(`fs`).promises

setInterval(()=>{

  fs2.unlink(`./test.js`)
  .catch(err=>{
    console.error(err)
  })

},1000)

setInterval(()=>{

  fs1.unlink(`./test.js`, err =>{
    console.error(err)
  })

},1000)