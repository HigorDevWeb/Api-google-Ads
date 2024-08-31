// tokens.js
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

const oauth2Client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'http://localhost'
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/adwords'],
  response_type: 'code'
});

console.log(`Authorize this app by visiting this URL: ${authUrl}`);

async function getTokens(code) {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
  } catch (error) {
    console.error('Error getting tokens:', error);
  }
}

const codeFromAuthUrl = 'your-authorization-code';
getTokens(codeFromAuthUrl);
