import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected successfully..!");
    })
    .catch((err) => {
      console.log("err: ", err);
      console.log("Database connection failed..!");
    });
};
