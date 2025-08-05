import express from 'express';
import cors from 'cors';
import noteRoutes from './routes/notes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', noteRoutes);

export default app;