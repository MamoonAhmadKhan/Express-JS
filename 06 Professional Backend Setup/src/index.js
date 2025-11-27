import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import app from "./app.js";
dotenv.config();

const port = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log(`Error: ${error}`);
        throw error;
    });

    app.listen(port, () => {
        console.log(`Your server is running on port ${port}`);
    });
})
.catch((error) => {
    console.log(`MongoDB Connection Error: ${error}`);
});





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