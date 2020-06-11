import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const port = 5002;

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.get("/", (_req, res) => res.send("Server is alive"));

app.listen(process.env.PORT || port, () => console.log(`App is listening at port ${port}`));
