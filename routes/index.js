const route = require('express').Router()
const db=require('../db.js')

route.get('/', (req,res)=>{
    db.getrecruiterdetails()
    .then((recruiterdetails)=>{
        res.status(200).send(recruiterdetails)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

route.post('/',(req,res)=>{
    db.addrecruiterdetails(req.body.job_title,req.body.job_description,req.body.keywords,req.body.minimum
        ,req.body.maximum,req.body.minimum_salary,req.body.maximum_salary,req.body.location
        ,req.body.employment_type,req.body.job_type)
    .then((data)=>{
res.redirect('/')
    })
    .catch((err)=>{
        res.send(err)
    })
})


exports = module.exports = {
    route
}
