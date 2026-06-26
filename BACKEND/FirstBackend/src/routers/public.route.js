import express from 'express'
import { ContactUs } from '../controllers/public.controller';

const PublicRouter = express.Router();

PublicRouter.post("/contact-us",ContactUs)


export default PublicRouter;