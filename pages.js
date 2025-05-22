<script>


import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.get('/api/webflow-pages', async (req, res) => {
  const siteId = '62b33d4be1f1d95580bb1e35';
  const token = '6674f5c7dfffe80afaff9453d62b74adde6b6772661fb228f8812ca8345c7bd9'; // Keep this secure

  const apiUrl = `https://api.webflow.com/v2/sites/${siteId}/pages?limit=100&offset=0`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });

    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // Optional, for dev
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Webflow fetch failed' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

</script>

