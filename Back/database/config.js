const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Online Mongo Database");
  } catch (error) {
    console.log(error);
    throw new error("Error to start the database");
  }
};

module.exports = { dbConnection };
