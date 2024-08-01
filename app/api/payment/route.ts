import crypto from 'crypto';

export default async function POST(req: Request, res:any) {
  if (req.method === 'POST') {
    const merchantId = process.env.PHONEPE_MERCHANT_ID;
    const saltKey = process.env.PHONEPE_SALT_KEY;
    const saltIndex = 1; // Usually 1, but confirm from PhonePe

    const { amount, callbackUrl }:any = req.body;

    const paymentData = {
      merchantId: merchantId,
      merchantTransactionId: `MT${Date.now()}`,
      merchantUserId: `MUID${Date.now()}`,
      amount: amount * 100, // Convert to paise
      redirectUrl: callbackUrl,
      redirectMode: 'POST',
      callbackUrl: callbackUrl,
      mobileNumber: '9999999999', // Customer's mobile number
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };

    const paymentDataBase64 = Buffer.from(JSON.stringify(paymentData)).toString('base64');

    const string = `${paymentDataBase64}/pg/v1/pay${saltKey}`;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = `${sha256}###${saltIndex}`;

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      body: JSON.stringify({ request: paymentDataBase64 })
    };

    try {
      const response = await fetch('https://api.phonepe.com/apis/hermes/pg/v1/pay', options);
      const responseData = await response.json();

      if (responseData.success) {
        res.status(200).json({ url: responseData.data.instrumentResponse.redirectInfo.url });
      } else {
        res.status(400).json({ error: responseData.message });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while processing the payment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}