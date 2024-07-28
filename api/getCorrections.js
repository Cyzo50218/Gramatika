const fetch = require('node-fetch'); // Ensure you have node-fetch installed

module.exports = async (req, res) => {
  try {
    const response = await ('/api/corrections.json');
    if (!response.ok) throw new Error('Network response was not ok.');
    const corrections = await response.json();
    res.status(200).json(corrections);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch corrections', details: error.message });
  }
};
