import { Router } from 'express';
import {
  getProfile,
  getSkills,
  getProjects,
  getExperience,
  getEducation,
  getCertifications,
  handleContact
} from '../controllers/portfolioController.js';

const router = Router();

router.get('/profile', getProfile);
router.get('/skills', getSkills);
router.get('/projects', getProjects);
router.get('/experience', getExperience);
router.get('/education', getEducation);
router.get('/certifications', getCertifications);
router.post('/contact', handleContact);

export default router;
