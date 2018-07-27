const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    database:'recruiter',
    user:'root',
    password:'kvsector3'
})

function getrecruiterdetails () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM recruiter_details`,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            }
        )
    })
}

function addrecruiterdetails(job_title,job_description,keywords,minimum,maximum,min_salary
    ,max_salary,location,employment_type,job_type)
{
    return new Promise(function(resolve, reject) {
        connection.query(
            `INSERT INTO recruiter_details (job_Title,job_Description,keywords,minimum,maximum,min_salary,max_salary,location,employment_type,job_type) 
            VALUES (?,?,?,?,?,?,?,?,?,?)`,
            [job_Title,job_Tescription,keywords,minimum,maximum,min_salary,max_salary,location,employment_type,job_type],
            function(err,rows,cols) {
                if (err) {
                    reject(err.message)
                } else {
                    resolve()
                }
            }
        )
    })
}

exports=module.exports={
    getrecruiterdetails,addrecruiterdetails
}