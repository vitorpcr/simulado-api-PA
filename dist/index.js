"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost/minha-api';
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Conectar ao MongoDB
mongoose_1.default.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Conectado ao MongoDB');
})
    .catch((error) => {
    console.error(`Erro ao conectar ao MongoDB: ${error}`);
});
// Rotas da API
app.use('/api', api_1.default);
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
