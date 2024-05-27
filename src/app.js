import express from "express";
import conecta from "./config/dbConnect.js";
import routes from './routes/index.js'

const conexao = await conecta();

conexao.on("error", (erro) => {
    console.error("Erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao OK")
})

const app = express();
routes(app);

export default app;