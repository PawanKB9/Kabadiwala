import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './Router/UserRoute.js'
import adminRoute from './Router/TempMalik.js'
import orderRoute from './Router/SellRoute.js'
import connectDB from './Database/ConnectDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();


const baseUrl = process.env.BASE_URL;
const app = express();

connectDB();

// CORS for frontend (React/Vite)
app.use(cors({ origin: 'https://kabadiwala-1.onrender.com', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(`/${baseUrl}/user`, userRoutes);
app.use(`/${baseUrl}/admin`, adminRoute);
app.use(`/${baseUrl}/order`, orderRoute);

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
