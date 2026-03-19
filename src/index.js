// import dotenv from "dotenv"

// // import mongoose from "mongoose";
// // import { DB_NAME } from "./constants.js";
// import connectDB from "./db/index.js";

// dotenv.config({
//     // dotenv defaults to loading from a file called ".env" in the
//     // project root. the original code pointed at "./env" (missing the
//     // leading dot) so the variables were never loaded.
//     //
//     // simply remove the path option or use the correct filename.
//     // dotenv.config();
//     path: './.env'
// })


// connectDB()
// .then( () =>{
//     app.listen(process.env.PORT || 8000,()=>{
//         console.log(`Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) =>{
//     console.log("Mongo dv connection failed!!! ",err);
// })
// // import express from "express"
// // const app = express()
// // ( async () => {
// //     try{
// //         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// //         app.on("error" , (error) => {
// //             console.log("ERRR : ", error);
// //             throw error
// //         })
// //         app.listen(process.env.PORT,() => {
// //             console.log(`App is listening on port ${process.env.PORT}`);
// //         })
// //     }
// //     catch(error){
// //         console.error("ERROR: ",eriir);
// //         throw err
// //     }
    
// // })()

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/index.js";

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("Mongo db connection failed!!! ", err);
});