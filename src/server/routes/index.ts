import express from 'express';

const router = express.Router();

router.get('/www', (_req, res) => {
  res.send({ www: true });
  res.end();
});

export default router;
