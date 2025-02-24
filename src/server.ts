import cookieParser from "cookie-parser";
import express  from "express";
import { authRouter } from "./router/auth.route";
import bodyParser from "body-parser";
import {default as secrets} from 'dotenv';
import cors from 'cors'
import { globalErrorHandler } from "./middleware/error.middleware";

secrets.config()
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({exposedHeaders: ['set-cookie'], credentials: true}))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded())


//Routers
app.use(authRouter);

app.use(globalErrorHandler);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
