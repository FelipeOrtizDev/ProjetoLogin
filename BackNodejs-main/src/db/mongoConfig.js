const { log } = require("console");
const mongoose = require("mongoose");
require("dotenv").config()
//chave acesso ao banco caso não consiga acessar
// "mongodb+srv://test:Phantom_Astra01@cluster0.opvhkhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connect = async () => {
  await mongoose
    .connect(process.env.POST_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log("Conexao com o banco de dados funcionou!");
    })
    .catch((error) => {
      log(error);
    });
};

module.exports = { connect };
