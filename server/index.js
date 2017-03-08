import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

/**
 * Server configurations
 */
const app = express();

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 100000000 }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((req, res) => {
  res.status(404).end();
});

app.use((error, req, res) => {
  const statusCode = error.statusCode || 500;
  const err = {
    error: statusCode,
    message: error.message
  };
  if (!res.headersSent) {
    res.status(statusCode).send(err);
  }
});

export default app;
