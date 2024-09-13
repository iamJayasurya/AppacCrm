var dotenv = require('dotenv');
var path = require('path');
var cors = require('cors');
var express = require('express');
var app = express();

// Import routes
const loginRoutes = require('./routes/register');
const productRoutes = require('./routes/product');



// Load environment variables
dotenv.config({ path: path.join(__dirname, 'env', 'config.env') });

// Connect to the database
const connectDb = require('./env/connectDB');
connectDb();

// Middleware
app.use(cors());
app.use(express.json());

// Register routes
app.use('/testapi/v1/', productRoutes);
app.use('/testapi/v1/',loginRoutes)


// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
