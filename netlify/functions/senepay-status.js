export const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  const token = event.queryStringParameters.token;
  if (!token) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Le paramètre token est requis' }) };
  }

  try {
    const apiKey = process.env.SENEPAY_PUBLIC_KEY;
    const apiSecret = process.env.SENEPAY_SECRET_KEY;

    if (!apiKey || !apiSecret) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Clés SenePay non configurées." }) };
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
        throw new Error(data.error || data.message || "Erreur SRV SenePay");
    }

    return { statusCode: 200, headers, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
