import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DB_URL)
      .then((res) => console.log("Connected to cloud mongodb "));
  } catch (err) {
    console.log(err);
  }
};
