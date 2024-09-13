var mongoose =require('mongoose')

const regSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    emailid:String,
    mno:String,
    empid:String,
    password:String,
    confirmpwd:String,
    cpass :String,
    role:String,
    company:String,
    dept_id:String,
    dept_head:String,
    status:String,
})
 const RegModal =mongoose.model("reg" , regSchema);
  module.exports=RegModal;
