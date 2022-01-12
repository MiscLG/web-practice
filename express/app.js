const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
  res.send('Hello World!')
})
app.post('/',(req,res)=> {
  res.send('Got a post request')
})
app.put('/user', (req,res)=>{
  res.send('Got a put request at /user')
})
app.delete('/user',(req,res)=>{
  res.send('got Delete reuest at /user')
})

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})

exports.app= app;
