import express from 'express';
// import cors from 'cors';
import routes from './routes/';

const app = express();
const port = 4000;

app.use(express.json());
// app.use(cors({ origin: '*' }));
app.use('/api/v1', routes);

app.listen(port, () => {
  console.log('Server is up!');
});
