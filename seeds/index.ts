import db from "../config/connection.js";
import { User, Thought } from "../models/index.js";
import { users, thoughts } from "./data.js";

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    console.log("Existing data cleared.");

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users inserted.`);

    // Insert thoughts and associate them with users
    for (const thought of thoughts) {
      const user = createdUsers.find((u) => u.username === thought.username);
      if (user) {
        const newThought = await Thought.create(thought);
        user.thoughts.push(newThought._id);
        await user.save();
      }
    }

    console.log("Thoughts inserted and associated with users.");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

db.once("open", seedDatabase);