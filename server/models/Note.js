import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Note', noteSchema);