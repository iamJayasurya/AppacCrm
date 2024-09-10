var express = require('express');
const { getwrokOrder } = require('../controller/workOrderController');
const reportController = require('../controller/reportController');
var router = express.Router();

router.route('/workorder').get(getwrokOrder);
router.route('/dailyreport/today').post(reportController.postreport);

// Update an existing report
router.route('/dailyreport/edit/:id').put(reportController.editreport);

// Retrieve all reports
router.route('/dailyreport').get(reportController.getreport);

// Route to update a specific report by ID

module.exports = router;
