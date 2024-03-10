import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";

// .env
dotenv.config();
const port = process.env.PORT || 3000;


// EXPRESS
const app = express();

app.use(express.json())

// cors
app.use(cors({
    origin: ["http://localhost:3000/", "http://localhost:5173"],
    credentials: true,
}));

// routes

app.use("/home", require("./routes/homeRouter"))
app.use("/image", require("./routes/imageRouter"))
app.use("/signin", require("./routes/signinRouter"))
app.use("/register", require("./routes/registerRouter"))

const myPlaintextPassword: string = "";
const saltRounds: number = 10;

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    // Store hash in your password DB.
});



app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
