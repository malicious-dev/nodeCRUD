require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DATABASE_URL;

const options = {
  // autoIndex: false, // Don't build indexes
  // maxPoolSize: 10, // Maintain up to 10 socket connections
  // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  // family: 4 // Use IPv4, skip trying IPv6
};

try
{
mongoose.connect(url, options)
console.log("engine started ...")
} catch (error) {
  handleError(error);
}