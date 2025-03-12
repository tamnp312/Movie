import authRoutes  from './auth.router.js';
import movieRoutes from './movie.router.js';
import tvRoutes from './tv.router.js';


const routes = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/movie', movieRoutes);
  app.use('/api/v1/tv', tvRoutes);
};

export default routes;
