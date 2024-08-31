import 'dotenv/config'; // Carrega as variáveis de ambiente
import express from 'express';
import { GoogleAdsApi } from 'google-ads-api';

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Initialize Google Ads API client
const client = new GoogleAdsApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  developer_token: process.env.DEVELOPER_TOKEN,
});

// Customer ID and refresh token
const customer = client.Customer({
  customer_id: process.env.CUSTOMER_ID,
  refresh_token: process.env.REFRESH_TOKEN,
});

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to fetch keyword ideas
app.get('/keywords', async (req, res) => {
  const { keyword, location_id, language_id } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }

  try {
    const keywordPlanService = customer.keywordPlanIdeas;

    // Request for keyword ideas
    const results = await keywordPlanService.generateKeywordIdeas({
      language: `customers/${process.env.CUSTOMER_ID}/languages/${language_id || '1000'}`, // Default to English
      geo_target_constants: [`customers/${process.env.CUSTOMER_ID}/geoTargetConstants/${location_id || '2840'}`], // Default to US
      keyword_seed: { keywords: [keyword] },
    });

    // Return the keyword ideas in response
    const keywordIdeas = results.results.map(idea => ({
      keyword: idea.text,
      avgMonthlySearches: idea.keyword_idea_metrics.avg_monthly_searches,
      competition: idea.keyword_idea_metrics.competition,
    }));

    res.json({ keywordIdeas });
  } catch (error) {
    console.error('Error fetching keyword ideas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
