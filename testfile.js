<script>
// server.js
const express = require('express');
const fetch = require('node-fetch'); // Or use native fetch in Node 18+
const app = express();

app.get('/webflow-pages', async (req, res) => {
  const url = 'https://api.webflow.com/v2/sites/682e54df234963f5e17c457a/pages?limit=100&offset=0';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 522f1ba4e2ef301b083f40fea00c3c043de3865698c243d393e788a4c845857f',
      }
    });

    const data = await response.json();
    res.json(data); // Send the data back to your frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Webflow pages' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

</script>
