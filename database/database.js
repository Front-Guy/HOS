require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ujmy6ob.mongodb.net/?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(()=> console.log("Connexion à MongoDB réussi"))
    .catch((error)=> console.log("Connexion à MongoDB échouée", error))

module.exports = mongoose;