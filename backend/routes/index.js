import protectRouter from '../middleware/protectRouter.js';
import authRoutes  from './auth.router.js';
import movieRoutes from './movie.router.js';
import tvRoutes from './tv.router.js';
import searchRoutes from './search.router.js';


const routes = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/movie',protectRouter, movieRoutes);
  app.use('/api/v1/tv',protectRouter, tvRoutes);
  app.use('/api/v1/search',protectRouter, searchRoutes);

};

export default routes;
