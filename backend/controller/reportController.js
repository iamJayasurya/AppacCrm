var ReportModal= require('../modal/reportModal')


// GET method to retrieve reports
exports.getreport = async (req, res, next) => {
    try {
      const data = await ReportModal.find({}); // Fetch all reports
      res.json({
        msg: 'Report retrieved',
        data
      });
    } catch (error) {
      res.status(404).json({
        msg: 'Report not retrieved',
        error: 'Report not found'
      });
    }
  };
  
  // POST method to create a new report
  exports.postreport = async (req, res, next) => {
    try {
      console.log(req.body, 'data'); // Log the incoming request body
      
      // Validate the incoming data if needed
      // Example: Check if required fields are present
      const { report_date, client, start_time, end_time, status  } = req.body;
      if (!report_date || !start_time || !end_time || !status || !client) {
        return res.status(400).json({
          msg: 'Missing required fields'
        });
      }
  
      // Create a new report
      const newReport = await ReportModal.create(req.body);
   
  
      // Return a success response with the created report
      res.json({
        msg: 'Report created',
        data: newReport
      });
    } catch (error) {
      // Return an error response if something goes wrong
      res.status(500).json({
        msg: 'Report not created',
        error: error.message
      });
    }
  };
  

 // Ensure you import your model

 exports.editreport = async (req, res, next) => {
  try {
      const { id } = req.params;

      const updatedReport = await ReportModal.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
      );

      if (!updatedReport) {
          return res.status(404).json({
              msg: 'Report not found',
              error: 'No report found with this ID'
          });
      }

      res.json({
          msg: 'Report updated successfully',
          data: updatedReport
      });
  } catch (error) {
      res.status(500).json({
          msg: 'Report not updated',
          error: error.message
      });
  }
};