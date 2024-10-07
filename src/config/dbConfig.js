const mongoose = require("mongoose")

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/green_eye")
    console.log("succesfully connected to MongoDb 👌")
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  connectToMongo,
}
