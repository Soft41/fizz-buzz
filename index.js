import express, {json} from 'express'
import fizzbuzzRouter from "./router/fizzbuzzRouter.js";
import WebSocket from 'ws'

const app = express();
const port = 3000 || process.env.PORT;

app.use('/fizzbuzz', fizzbuzzRouter);
app.use(json)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
