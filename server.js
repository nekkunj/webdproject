const express=require('express')

const app=express()
const path=require('path')
app.use('/', express.static(path.join(__dirname, 'public_static')))
app.use('/account/login',express.static(path.join(__dirname,'public_static/login')))
app.use('/account/signup',express.static(path.join(__dirname,'public_static/signup')))

app.listen(4444,()=>{console.log('listening to port http://localhost:4444')})