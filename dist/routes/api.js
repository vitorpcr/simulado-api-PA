"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PacienteController_1 = __importDefault(require("../controllers/PacienteController"));
const router = (0, express_1.Router)();
// Rotas para Paciente
router.post('/pacientes', PacienteController_1.default.create);
router.get('/pacientes', PacienteController_1.default.read);
// Adicione as rotas para Secretária, Consulta e Agenda da mesma maneira.
exports.default = router;
