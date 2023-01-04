import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

/** Setting up connection to MongoDB */
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

/** CONNECTING TO MONGODB */
connectDB();

const app = express();

app.use(express.json()); // to accept json data

app.get("/health", (req, res) => {
  res.status(200).send({ message: "successful" });
  
});

/** SUCCESS MESSAGE IF SERVER IS RUNNING */
app.get("/", (req, res) => {
  res.send("API is up and running...Thanks Akash for building me up :)");
  
})

/** ROUTES FOR MODIFYING NOTES */
app.use("/notes", noteRoutes);


/** PORT ON WHICH SERVER RUNS */
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}..`
  )
);