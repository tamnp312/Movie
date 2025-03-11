import express from 'express';
import routes from './routes/index.js';
import { ENV_VARS } from './config/envVars.js';
import connectDB from './config/db.js';

const app = express();
app.use(express.json()); // will access us to parse the body of the request 

const PORT =  ENV_VARS.PORT;
routes(app);


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



 