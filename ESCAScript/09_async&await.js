async function fetchData(){
  const response = await fetch(`https://httpbin.org/get`)
  const data = await response.json()
  return data
}

fetchData().then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.error(error)
})