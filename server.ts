import express, { Application } from 'express';
import db from './config/connection'; // Add `.js` to the import path
import routes from './routes/index'; // Add `.js` to the import path

const PORT: number = 3001;
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Listen for the database connection event
db.on('error', (err: Error) => {
  console.error('Database connection error:', err);
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});