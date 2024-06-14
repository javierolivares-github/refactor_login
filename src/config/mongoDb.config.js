import mongoose from "mongoose";

const urlDb = "mongodb+srv://admin:123456admin@e-commerce.dqrqnwy.mongodb.net/ecommerce";

export const connectMongoDB = async () => {
  try {
    // Conexión con la base de datos
    mongoose.connect(urlDb);
    console.log("Mongo DB Conectado");
  } catch (error) {
    console.log(error);
  }
};