import express from 'express';

import { getSearch } from '../controllers/search.js';

const router = express.Router();

router.get('/search', getSearch);
router.get('/', getSearch);

export default router;