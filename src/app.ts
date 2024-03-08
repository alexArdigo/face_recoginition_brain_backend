import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(cors());

const port = process.env.PORT || 3000;

const myPlaintextPassword: string = "";
const saltRounds: number = 10;

type Database = {
  id: number;
  name: string;
  email: string;
  password: string;
  entries: number;
  joined: Date;
};

const database: Database = {
  id: 123,
  name: "John",
  email: "john@gmail.com",
  password: "cookies",
  entries: 0,
  joined: new Date(),
};

app.get("/", (req: Request, res: Response) => {
  res.send({
    name: "Alex",
    age: 41,
  });
});

app.post("/sign-in", (req: Request, res: Response) => {
  if (
    req.body.email === database.email &&
    req.body.password === database.password
  ) {
    res.json("success");
  } else {
    res.status(404).json('error logging in')
  }

});

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
