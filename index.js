const express = require("express");
const { connectMongoDb } = require("./connection")

const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares/index")

const app = express();
const PORT = 8000;


// Middleware plugin

app.use(express.urlencoded({ extended: false }))

app.use(logReqRes("log.txt"))

// Connection

connectMongoDb("mongodb://localhost:27017/youtube-app-1")

// Routes

app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server started at ${PORT}`))

