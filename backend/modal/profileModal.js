var mongoose =require('mongoose');

const profileSchema =new mongoose.Schema({
    EmpID:String,
    Mbl:Number,
    Dob:String,
    Mail:String,
    Location:String,
    EmergenyNum:Number,
    EmergencyContactPersion:String,
    BloodGrp:String,
    medCon:String,
    EmpType:String,
    Joindt:String,
    CurrentSalary:String,
    Appraisaldt:String,
    NextAppraisal:String

})
const ProfileModal = mongoose.model('profile' , profileSchema );
module.exports = ProfileModal;