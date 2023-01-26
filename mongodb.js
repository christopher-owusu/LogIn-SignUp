const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/userValidation")
.then(() => {
    console.log("mongodb connected...")
})
.catch(() => {
    console.log("failed to....")
})


const LogInSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    // balance: {
    //     type:Number
    // },
    // productTitle: {
    //     type:String
    // },
    // userAmount: {
    //     type:Number
    // }
    // conpassword: {
    //     type:String,
    //     required:true
    // }
})

const collection = new mongoose.model("collection1", LogInSchema)

// const BalanceSchema = new mongoose.Schema({
//     balance: {
//         type:Number,
//         required:true
//     },
//     productTitle: {
//         type:String,
//         required:true
//     },
//     userAmount: {
//         type:Number,
//         required:true
//     }
//     // conpassword: {
//     //     type:String,
//     //     required:true
//     // }
// })

// const collection2 = new mongoose.model("collection2", BalanceSchema)

module.exports = collection
// module.exports = collection2