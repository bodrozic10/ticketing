import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose, { Schema } from "mongoose";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
});

const Blog = mongoose.model("Blog", blogSchema);

const start = async () => {
  try {
    console.log(process.env.USERNAME);
    await mongoose.connect(
      // mongodb+srv://bodrozicnikola3:<password>@cluster0.ew5airf.mongodb.net/test
      `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@auth_mongo:27017/auth?authSource=admin`,
      {}
    );
    console.log("success");
    const blog = new Blog({ title: "title" });
    await blog.save();
    console.log(await Blog.find());
  } catch (error) {
    console.log(error);
    console.log("failed");
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
