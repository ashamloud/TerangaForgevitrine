export const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const apiKey = process.env.SENEPAY_PUBLIC_KEY;
    const apiSecret = process.env.SENEPAY_SECRET_KEY;

    if (!apiKey || !apiSecret) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Clés SenePay non configurées." }) };
    }

    const origin = event.headers.origin || 'https://terangaforge.com';

    const payload = {
      amount: 1500,
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
      throw new Error(data.error || data.message || "Erreur de création SenePay");
    }

    return { statusCode: 200, headers, body: JSON.stringify(data) };
  } catch (err) {
    console.error("SenePay Session Error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
