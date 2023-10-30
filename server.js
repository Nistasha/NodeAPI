import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import errorMiddleware from './middleware/errorMiddleware.js';
import productRoute from './routes/productRoute.js';

const app=express();

const MONGO_URL= process.env.MONGO_URL;
const FRONTEND= process.env.FRONTEND;
var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
const PORT= process.env.PORT;
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/blog', (req,res) => {
    res.send('Hello Blog, this is Nistasha!');
})

app.use(errorMiddleware);
mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log(error );
})
