import { Request, Response } from 'express';
import { User, Thought } from '../models';

// Get all users
export const getUsers = async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve users', error: err });
  }
};

// Get a single user
export const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends');

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve user', error: err });
  }
};

// Create a user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create user', error: err });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update user', error: err });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    // Remove associated thoughts
    await Thought.deleteMany({ _id: { $in: user.thoughts } });

    res.json({ message: 'User and associated thoughts deleted!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user', error: err });
  }
};

// Add a friend
export const addFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add friend', error: err });
  }
};

// Remove a friend
export const removeFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove friend', error: err });
  }
};