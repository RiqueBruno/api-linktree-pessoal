import express from 'express';
import linkRoutes from './link.routes.js';

const route = express.Router();

route.use('/links', linkRoutes);

export default route;