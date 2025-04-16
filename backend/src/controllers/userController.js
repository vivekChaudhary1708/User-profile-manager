import User from '../models/users.model.js';

// Register new user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, profilePicture } = req.body;

    // 1. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 2. Create new user
    const user = await User.create({
      name,
      email,
      password, // ye model me jaake hash ho jayega
      profilePicture,
    });

    // 3. Response
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
      createdAt: user.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
