const { google } = require('googleapis');

const credentials = {
  installed: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    project_id: process.env.GOOGLE_PROJECT_ID,
    auth_uri: process.env.GOOGLE_AUTH_URI,
    token_uri: process.env.GOOGLE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_X509_CERT_URL,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
  }
};

const token = JSON.parse(process.env.GOOGLE_TOKEN); // Ensure you set this as an environment variable too

async function getTextFromDoc() {
  const { client_secret, client_id, auth_uri, token_uri } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, auth_uri);

  oAuth2Client.setCredentials(token);

  const docs = google.docs({ version: 'v1', auth: oAuth2Client });
  const documentId = '1_s3AAawCYD4D9atRaU7yM4CmNp6_kZZ37FAKor0YJec'; 

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
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const rules = await getTextFromDoc();
    res.status(200).json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch text from Google Docs', details: error.message });
  }
};
