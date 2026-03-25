export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ error: 'Le paramètre token est requis' });
  }

  try {
    const apiKey = process.env.SENEPAY_PUBLIC_KEY;
    const apiSecret = process.env.SENEPAY_SECRET_KEY;

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: "Clés SenePay non configurées." });
    }

    const response = await fetch(`https://api.sene-pay.com/api/v1/checkout/sessions/${token}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'X-Api-Secret': apiSecret
      }
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || data.message || "Erreur de vérification de session SenePay");
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("SenePay Status Error:", err);
    return res.status(500).json({ error: err.message });
  }
}
