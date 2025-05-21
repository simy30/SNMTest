// Example using Node.js (Express or Serverless)
import fetch from 'node-fetch';

export default async (req, res) => {
  const response = await fetch('https://api.webflow.com/v2/sites/62b33d4be1f1d95580bb1e35/pages?limit=200&offset=0', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_SECRET_API_KEY',
      'accept-version': '2.0.0'
    }
  });
  const data = await response.json();
  res.status(200).json(data);
};
