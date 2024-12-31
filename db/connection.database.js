const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("connected")
    } catch (error) {
        console.log("connect fail")
        console.log("error: connect fail", error)
        throw error
    }
}

module.exports = connectDB