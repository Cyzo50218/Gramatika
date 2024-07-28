const fs = require('fs');

module.exports = (req, res) => {
  fs.readFile('rules.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read rules file', details: err.message });
    }
    res.status(200).json(JSON.parse(data));
  });
};
