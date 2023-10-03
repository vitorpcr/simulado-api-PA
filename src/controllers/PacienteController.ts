import { Request, Response } from 'express';
import Paciente, { IPaciente } from '../models/Paciente';

class PacienteController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const paciente: IPaciente = new Paciente(req.body);
      await paciente.save();
      res.status(201).json({ message: 'Paciente criado com sucesso', paciente });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async read(req: Request, res: Response): Promise<void> {
    try {
      const pacientes: IPaciente[] = await Paciente.find();
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  
}

export default new PacienteController();
