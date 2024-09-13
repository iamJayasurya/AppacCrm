const RegModal= require('../modal/resModal')


exports.getLogin = async (req, res, next) => {
    try {
        const { empid, password } = req.body;  // Extract empid and password from the request body

        // Find the user by empid
        const user = await RegModal.findOne({ empid: empid });
        
        if (user) {
            // Check if the provided password matches the stored password
            if (user.password === password) {
                res.json({
                    success: true,
                    empid: user.empid,
                    password: user.password,
                    msg: 'Login successful'
                });
            } else {
                res.json({
                    success: false,
                    msg: 'Invalid password'
                });
            }
        } else {
            res.json({
                success: false,
                msg: 'User not found'
            });
        }
    } catch (error) {
        console.error('The error is: ' + error);
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};
