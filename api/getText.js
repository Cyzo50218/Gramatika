const fs = require('fs');
const { google } = require('googleapis');

const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

async function getTextFromDoc() {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Load the token
  const token = JSON.parse(fs.readFileSync('token.json', 'utf8'));
  oAuth2Client.setCredentials(token);

  const docs = google.docs({ version: 'v1', auth: oAuth2Client });
  const documentId = '1_s3AAawCYD4D9atRaU7yM4CmNp6_kZZ37FAKor0YJec'; // Your Google Doc ID

  try {
    const res = await docs.documents.get({ documentId });
    const content = res.data.body.content;
    const rules = extractRules(content);
    return rules;
  } catch (err) {
    throw new Error('Error extracting text: ' + err.message);
  }
}

function extractRules(content) {
  const rules = [];
  if (content) {
    content.forEach(element => {
      if (element.paragraph && element.paragraph.elements) {
        let paragraphText = '';
        element.paragraph.elements.forEach(el => {
          if (el.textRun && el.textRun.content) {
            paragraphText += el.textRun.content;
          }
        });
        rules.push(paragraphText.trim());
      }
    });
  }
  return rules;
}

module.exports = async (req, res) => {
  try {
    const rules = await getTextFromDoc();
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch text from Google Docs', details: error.message });
  }
};
    
