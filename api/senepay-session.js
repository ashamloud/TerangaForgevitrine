export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.SENEPAY_PUBLIC_KEY;
    const apiSecret = process.env.SENEPAY_SECRET_KEY;

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: "Clés SenePay non configurées sur le serveur." });
    }

    // Récupérer l'URL exacte du site pour y revenir
    const origin = req.headers.origin || 'https://terangaforge.com';

    const payload = {
      amount: 1500, // 1500 FCFA
      currency: "XOF",
      orderReference: "CV-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      description: "Téléchargement CV TerangaForge Premium",
      successUrl: origin + "/forge-cv-chat.html?payment=success",
      cancelUrl: origin + "/forge-cv-chat.html?payment=cancel",
      expiresInMinutes: 30
    };

    const response = await fetch('https://api.sene-pay.com/api/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey,
        'X-Api-Secret': apiSecret
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || data.message || "Erreur de création de session SenePay");
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("SenePay API Error:", err);
    return res.status(500).json({ error: err.message });
  }
}
