import mongoose from "mongoose";

const connectToDB = async () => {
  let connectionURL =
    "mongodb+srv://mungainelle96:nelson@cluster0.p6hz4ls.mongodb.net/";
  mongoose
    .connect(connectionURL)
    .then(() => console.log("Blog db connection successfule"))
    .catch((e) => console.log(e));
};
export default connectToDB;
