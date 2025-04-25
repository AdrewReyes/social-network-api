import { Request, Response } from 'express';
import Thought from '../models/thought';
import User from '../models/user';

// POST a new thought
export const createThought = async (req: Request, res: Response) => {
  const { thoughtText, username, userId } = req.body;
  try {
    const newThought = await Thought.create({ thoughtText, username });
    await User.findByIdAndUpdate(
      userId,
      { $addToSet: { thoughts: newThought._id } },
      { new: true }
    );
    res.status(201).json(newThought);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// POST a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought with this ID!' });
    } else {
      res.json(thought);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought with this ID!' });
    } else {
      res.json(thought);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};