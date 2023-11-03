import express from 'express';
import { getJobDetails, apiDataFetch } from './job.controller.js';

const router = express.Router();

router.post("/job", (req, res) => {
    getJobDetails(req, res);
});

router.get('/job', (req, res) => {
    apiDataFetch(req, res);
})
export default router;