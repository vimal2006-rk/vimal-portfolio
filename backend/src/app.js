import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import portfolioRoutes from './routes/portfolioRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health / Root Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Vimal R K Portfolio API' });
});

// Portfolio API Routes
app.use('/api', portfolioRoutes);

// Serve Vite production build static assets
const distPath = path.resolve(__dirname, '../../frontend/dist');
app.use(express.static(distPath));

// Fallback to React index.html for client-side routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

// Centralized error handler
app.use(errorHandler);

export default app;
