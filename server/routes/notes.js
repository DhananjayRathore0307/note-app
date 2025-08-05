import express from 'express';
import Note from '../models/Note.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { title } = req.body;
  const note = await Note.create({ title, content: '' });
  res.json(note);
});

router.get('/:id', async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

router.put('/:id', async (req, res) => {
  const { content } = req.body;
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { content, updatedAt: new Date() },
    { new: true }
  );
  res.json(note);
});

export default router;