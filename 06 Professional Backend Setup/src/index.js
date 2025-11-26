import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import connectDB from "./db/db.js";

const app = express();
const port = process.env.PORT;

connectDB();





// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        
//         app.on("error", (error) => {
//             console.log(`Error: ${error}`);
//             throw error;
//         });
        
//         app.listen(port, () => {
//             console.log(`Your server is running on port ${port}`);
//         });
//     } catch (error) {
//         console.log(`MongoDB Connection Error: ${error}`);
//         throw error;
//     }
// })();