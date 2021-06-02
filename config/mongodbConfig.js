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


// const mongo = require("mongodb");

// var db = null;
// var url = "mongodb+srv://" + process.env.DB_HOST;

// const connectMDB = async () => {
//     try {
//         await mongo.MongoClient.connect(url, {
//                 useUnifiedTopology: true,
//             },
//             function (err, client) {
//                 if (err) {
//                     throw err;
//                 }

//                 db = client.db(process.env.DB_NAME);
//             })
//         console.log('connected to the database 🧙‍♂️')
//     } catch (error) {
//         console.log(`an error occurred: ${error}`)
//         throw error
//     }
// }

module.exports = connectMDB