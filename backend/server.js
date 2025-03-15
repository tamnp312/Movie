import express from 'express';
import routes from './routes/index.js';
import { ENV_VARS } from './config/envVars.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import path from 'path'

const app = express();
app.use(express.json()); // will access us to parse the body of the request 
app.use(cookieParser());

const PORT =  ENV_VARS.PORT;
const __dirname = path.resolve();
routes(app);

if(ENV_VARS.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,"frontend/dist")))  

  app.get("*", (req, res) => {
    const filePath = path.resolve(__dirname, "frontend", "dist", "index.html");
    res.sendFile(filePath);
  });
  
}
connectDB()
    .then( () => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch( (error) => {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    });



 