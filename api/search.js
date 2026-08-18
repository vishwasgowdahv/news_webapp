export default async function handler(req, res) {
  const { q, pageSize = 9 } = req.query;

  const apiKey = process.env.NEWSAPI_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured on server." });
  }

  if (!q) {
    return res.status(400).json({ error: "Query parameter 'q' is required." });
  }

  const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=${encodeURIComponent(q)}&pageSize=${pageSize}`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch search results.", details: err.message });
  }
}
