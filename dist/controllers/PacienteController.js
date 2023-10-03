"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Paciente_1 = __importDefault(require("../models/Paciente"));
class PacienteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const paciente = new Paciente_1.default(req.body);
                yield paciente.save();
                res.status(201).json({ message: 'Paciente criado com sucesso', paciente });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield Paciente_1.default.find();
                res.status(200).json(pacientes);
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
}
exports.default = new PacienteController();
