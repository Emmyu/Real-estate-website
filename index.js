import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json())
app.use(cookieParser())
app.use(cors())

// Define a route for the root endpoint ("/")
app.get('/', (req, res) => {
    res.send('Hello World!');
});
