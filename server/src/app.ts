import 'dotenv/config';
import express, { Application } from 'express';
import { connectDB } from './utils/database.connection';
import { logger } from './utils/logger';
import { CONSTANTS } from './utils/constant';
import cors from 'cors';
import morganBody from 'morgan-body';
const PORT = process.env.PORT || 4000;
import routes from './routes';
import { errorHandler, notFoundHandler } from './middlewares';
const app: Application = express();

morganBody(app);
app.use(express.json());
app.use(cors());
app.get('/', async (req, res) => res.send("<p>Travelopia Server</p>"))
app.use("/v1", routes);
process.on('unhandledRejection', (e: Error) => {
    logger.error("unhandledRejection", e);
});
process.on('uncaughtException', (e: Error) => {
    logger.error("uncaughtException", e);
});


app.use(errorHandler);
app.use(notFoundHandler);
connectDB(process.env.DATABASE || CONSTANTS.DATABASE);
app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));