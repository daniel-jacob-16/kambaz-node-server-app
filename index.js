import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import session from "express-session";

const app = express()
app.use(cors({
   credentials: true,
   origin: process.env.NETLIFY_URL || "http://localhost:5173",
 })
);
app.use(express.json());
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(
  session(sessionOptions)
);
UserRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000) 