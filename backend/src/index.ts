import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//permite acesso externo às rotas
app.use(cors());
app.use(routes);

app.listen(3333);