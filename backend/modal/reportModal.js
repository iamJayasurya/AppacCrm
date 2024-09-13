var mongoose=require('mongoose')

const reportSchema=new mongoose.Schema({
    report_date:String,
    report_date1:String,
    client:String,
    start_time:String,
    end_time:String,
    status:String,
    description:String,
    start:String,
    details:String,
    end:String,
    project_name:String,
    working_hours:String,
    submit_time:String,
    w_hours:Number,
    w_mins:Number,
    taskid:String,
    wipid:String,
    worktype:String,
    enquiry_month:String
})
const ReportModal = mongoose.model('dailyReport' ,reportSchema);
module.exports= ReportModal