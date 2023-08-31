const User = require('../models/user');

exports.searchProviders = async (req, res) => {
  try {
    const skills = req.body.skills;
    const providers = await User.searchProviders(skills);
    res.json(providers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
