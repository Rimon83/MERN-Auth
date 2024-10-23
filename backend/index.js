import express from "express";
import { connectToDB } from "./db/connectToDB.js";
import routes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();


app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// allows us to parse incoming requests:req.body. make sure these codes should be before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allows us to parse incoming cookies
app.use(cookieParser()); 

// import all routes
app.use("/api/auth", routes);

// for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
 connectToDB()
  console.log(`Listening on port ${PORT}`);
});
