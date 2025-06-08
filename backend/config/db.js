const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://roshan1234:roshan1234@campus-wellness-cluster.wie7svg.mongodb.net/Campus-Wellness-Challenge-Platform?retryWrites=true&w=majority&appName=Campus-Wellness-Cluster'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    console.log(`Connected to DB: ${conn.connection.name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
