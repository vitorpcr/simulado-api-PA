import { Router } from 'express';
import PacienteController from '../controllers/PacienteController';

const router: Router = Router();


router.post('/pacientes', PacienteController.create);
router.get('/pacientes', PacienteController.read);

export default router;
