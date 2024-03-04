import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript');
});
app.post('/sign-in', (req: Request, res: Response) => {
    res.json('signing in');
});


app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});