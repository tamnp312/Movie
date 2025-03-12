import express from 'express'; 

import * as tvController from '../controllers/tv.controller.js';

const router = express.Router(); 

router.get('/trending', tvController.getTrendingTv);
router.get('/:series_id/trailers', tvController.getTvShowTrailers);
router.get('/:series_id/details', tvController.getTvShowDetails);
router.get('/:series_id/similer', tvController.getSimilerTvShows);
router.get('/:category', tvController.getTvShowsByCategory);

export default router;