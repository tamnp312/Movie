import authRoutes  from './auth.router.js';
import movieRoutes from './movie.router.js';


const routes = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/movie', movieRoutes);
};

export default routes;
