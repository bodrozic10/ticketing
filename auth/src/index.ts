import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@auth_mongo:27017/auth?authSource=admin`
    );
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
