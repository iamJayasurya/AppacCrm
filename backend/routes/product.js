var express = require('express');
const { getwrokOrder } = require('../controller/workOrderController');
const { getreport, postreport, editreport } = require('../controller/reportController');
var router = express.Router();

router.route('/workorder').get(getwrokOrder);
router.route('/dailyreport').get(getreport);
router.route('/dailyreport/today').post(postreport);
router.route('/dailyreport/edit/:id').put(editreport);


// Route to update a specific report by ID

module.exports = router;
