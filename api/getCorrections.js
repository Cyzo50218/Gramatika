const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const filePath = path.resolve(__dirname, '../api/corrections.json');
  
  try {
    const corrections = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json(corrections);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch corrections', details: error.message });
  }
};
