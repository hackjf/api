const Job = require('../models/job');

exports.createJob = async (req, res) => {
  try {
    const { clientId, providerId, description, hours, totalAmount } = req.body;
    await Job.create(clientId, providerId, description, hours, totalAmount);
    res.json({ message: 'Job created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.payJob = async (req, res) => {
  try {
    const { jobId, amount } = req.body;
    await Job.pay(jobId, amount);
    res.json({ message: 'Job paid and completed' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
