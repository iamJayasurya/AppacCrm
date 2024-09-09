var mongoose=require('mongoose')

const reportSchema=new mongoose.Schema({
    reportdate:String,
    Client:String,
    startEnd:String,
    Totalhrs:String,
    status:String,
    description:String,

})
const ReportModal = mongoose.model('reporst' ,reportSchema);
module.exports= ReportModal