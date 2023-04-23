export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.youtube.com')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Handle actual request
  // ...
}
