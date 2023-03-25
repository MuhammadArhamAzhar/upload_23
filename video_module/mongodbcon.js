const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri = "mongodb+srv://zohaasadiq:namzoh2000@cluster0.seaypxs.mongodb.net/test?retryWrites=true&w=majority";
//const url="mongodb+srv://zohaasadiq:namzoh2000@cluster0.seaypxs.mongodb.net/test"
const connectDB = async () => {
    try {
      
  
      const conn = await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        
      })
  
      console.log(`MongoDB Connected`)
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  }
  

  module.exports = { connectDB }