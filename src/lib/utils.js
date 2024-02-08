const {default: mongoose} = require("mongoose");

const connections = {};
const mongodb = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.geunt7i.mongodb.net/myUniqueDBName?retryWrites=true&w=majority`;
export const connectToDB = async () => {
    try {
        if(connections.isConnected) {
            console.log("Using existing connection.");
            return;
        }
        const db = await mongoose.connect(mongodb);
        connections.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.log("Mongodb connection error from utils.js",error);
        // handleError(error);
      }
}