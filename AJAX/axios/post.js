const axios = require(`axios`)

const url = `https://httpbin.org/post`

const data = {
  name: `aster`, age : 29
}

const headers = {

  'Content-Type' : `applications/xml`

}





axios.post(url,data,headers)
.then(response=>{

  return response.data

}).then(data=>{

  console.log(data)

})
.catch(error=>{
  console.error(error)
})