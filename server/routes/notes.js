import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

// Create a new note
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ message: 'Invalid title' });
    }

    const note = await Note.create({ title, content: '' });
    res.status(201).json(note);
  } catch (error) {
    console.error('POST /notes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a note by ID
router.get('/:id', async (req, res) => {
  try {
    const noteId = req.params.id;
    console.log(`Fetching note with ID: ${noteId}`);

    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    console.error('GET /notes/:id error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a note's content by ID
router.put('/:id', async (req, res) => {
  try {
    const { content } = req.body;
    const noteId = req.params.id;

    if (typeof content !== 'string') {
      return res.status(400).json({ message: 'Invalid content' });
    }

    const note = await Note.findByIdAndUpdate(
      noteId,
      { content, updatedAt: new Date() },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    console.error('PUT /notes/:id error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
