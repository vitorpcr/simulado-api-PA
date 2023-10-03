import mongoose, { Schema, Document } from 'mongoose';

export interface IPaciente extends Document {
  nome: string;
  idade: number;
  email: string;
}

const PacienteSchema: Schema = new Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  email: { type: String, required: true },
});

export default mongoose.model<IPaciente>('Paciente', PacienteSchema);