import mongoose from "mongoose";
import { app } from "./app";
import https from "https";
import fs from "fs";

let key = fs.readFileSync(__dirname + "/key.pem", "utf-8");
let cert = fs.readFileSync(__dirname + "/cert.pem", "utf-8");

const parameters = {
  key: key,
  cert: cert,
};

let server = https.createServer(parameters, app);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@auth_mongo:27017/auth?authSource=admin`
    );
  } catch (error) {
    console.log(error);
  }
  app.listen(5000, () => {
    console.log("Listening on port 5000!!!!!!!!!!!");
  });
};

start();
