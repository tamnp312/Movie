import express from 'express';
import * as movieController from '../controllers/movie.controller.js';


const router = express.Router();

router.get('/trending', movieController.getTrendingMovie);
router.get('/:movieId/trailers', movieController.getMovieTrailers);
router.get('/:movieId/details', movieController.getMovieDetails);
router.get('/:movieId/similer', movieController.getSimilerMovies);
router.get('/:category', movieController.getMoviesByCategory);


export default router;