// require('dotenv').config({path: './.env'})
import dotenv from "dotenv"

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./.env" 
})


connectDB()
.then(() => {
    const PortNumber = process.env.PORT || 8000;
    app.on("error", (error) => {
        console.log("Error in starting server", error)
    }),
    app.listen(PortNumber , () => {
        console.log(`App is listening on PORT ${PortNumber}`)
    })
})
.catch((error) => {
    console.error("Error in connecting to DB", error)
})






/*
import express from "express"
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error in starting server", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`)
        }
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/