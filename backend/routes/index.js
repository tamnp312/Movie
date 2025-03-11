import authRoutes  from './auth.router.js';


const routes = (app) => {
  app.use('/api/v1/auth', authRoutes);
};

export default routes;
