const mongoose = require("mongoose");

const connectMongoDb = async (url) => {
    return mongoose.connect(url).then(() => {
        console.log("MongoDB connected")
    }).catch(err => console.log("Mongo error", err))
}

module.exports = {
    connectMongoDb
}