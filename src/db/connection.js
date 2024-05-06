import mongoose from "mongoose";

const mongoUrl = "mongodb+srv://KietTran:Neko241200*@cluster0.p1l0z2b.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0&authSource=db1&authMechanism=SCRAM-SHA-1";
export const connectMongoDb = () => {
    mongoose
   .connect(mongoUrl)
   .then(()=>{
        console.log("connected to MongoDb");
    })
    .catch(err =>{
        console.error("failed to connect to MongoDb in connectMongoDb");
    });
}