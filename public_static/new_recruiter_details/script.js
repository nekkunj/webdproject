
$(function(){
    var minimumyear=$('#minimum-year')
    var maximumyear=$('#maximum-year')
    var rsordollar=$('#rs-or-dollar')
    var minannualsalary=$('#min-annual-salary')
    var maxannualsalary=$('#max-annual-salary') 

    var submit_button=$('#submit-button')
    var loaction=$('#location')
    var job_description=$('#job-description')
    var keywords=$('#keywords')
    var job_title=$('#job-title')

    for(var i=0;i<=25;i++){
    minimumyear.append(`<option class="minimum-options">${i}</option>`)
    }
    
    minimumyear.click(()=>{
        maximumyear.children().remove()
        maximumyear.append(`<option>-Maximum-</option>`)
        if(minimumyear.val()==='-Minimum-') return
                console.log('asdas')
        var j=minimumyear.val()
        
        for(var i=0;i<=6;i++){
            var k=+i + +j
            maximumyear.append(`<option>${k}</option>`)
            }
    })
var k=50000
    for(var i=1;i<=5;i++){
        var l=10000
         k=+k + +l 
    minannualsalary.append(`<option>${k}</option>`)
    }


   submit_button.click(()=>{
    console.log('sasdd')
    $.post('/api',{
      job_title:job_title.val(),
      job_description:job_description.val(),
      keywords:keywords.val(),
      minimum:minimumyear.val(),
      maximum:maximumyear.val(),
      min_salary:minannualsalary.val(),
      max_salary:maxannualsalary.val(),
      loaction:loaction.val(),
      employment_type:'Permanent',
      job_type:'Full Time'
     })
   })


})
