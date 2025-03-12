import express from 'express'; 

import * as searchController from '../controllers/search.controller.js';

const router = express.Router(); 

router.get('/person/:query', searchController.searchPerson);
router.get('/movie/:query', searchController.searchMovie);
router.get('/tv/:query', searchController.searchTV);

router.get("/history", searchController.getSearchHistory);
router.delete("/history/:id", searchController.removeItemFromSearchHistory);

export default router;