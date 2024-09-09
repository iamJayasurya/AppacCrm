var ProfileModal =require('../modal/profileModal')

exports.profileData = async (req, res, next) => {
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


}