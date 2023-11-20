const axios = require(`axios`)

axios.get(`https://httpbin.org/get`)
.then((response) =>{

  console.log(response.data)

})
.catch((error)=>{
  console.error(error)
})