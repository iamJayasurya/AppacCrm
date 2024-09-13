var Express =require('express');
const {getLogin} =require('../controller/registerController')
var router =Express.Router();

router.route('/login').put(getLogin);


module.exports =router;
