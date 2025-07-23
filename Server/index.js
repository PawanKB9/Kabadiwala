import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './Router/UserRoute.js'
import adminRoute from './Router/TempMalik.js'
import orderRoute from './Router/SellRoute.js'
import connectDB from './Database/ConnectDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

connectDB();

// CORS for frontend (React/Vite)
app.use(cors({ origin: 'https://kabadiwala-1.onrender.com', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(`/https://kabadiwala-1.onrender.com/user`, userRoutes);
app.use(`/https://kabadiwala-1.onrender.com/admin`, adminRoute);
app.use(`/https://kabadiwala-1.onrender.com/order`, orderRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
