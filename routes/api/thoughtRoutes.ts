import { Router } from 'express';
import {
  createThought,
  addReaction,
  removeReaction,
} from '../../controllers/thoughtController.js';

const router = Router();

router.route('/').post(createThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

export { router as thoughtRouter };