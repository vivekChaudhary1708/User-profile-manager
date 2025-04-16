import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import userRoutes from './routes/userRoutes.js';  


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is working bhai");
});

app.use('/api/users', userRoutes); 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server chal rha h bhai on port ${PORT}`);
});
