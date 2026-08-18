export default async function handler(req, res) {
  const { category = "general", page = 1, pageSize = 9 } = req.query;

  const apiKey = process.env.NEWSAPI_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured on server." });
  }

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&category=${category}&pageSize=${pageSize}`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news.", details: err.message });
  }
}
