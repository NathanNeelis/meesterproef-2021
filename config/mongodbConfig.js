const mongoose = require('mongoose')

var url = "mongodb+srv://" + process.env.DB_HOST + "/" + process.env.DB_NAME;

const connectMDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('connected to the database 🧙‍♂️')
    } catch (error) {
        console.log(`an error occurred: ${error}`)
        throw error
    }
}

module.exports = connectMDB