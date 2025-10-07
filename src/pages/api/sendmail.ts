import type { NextApiRequest, NextApiResponse } from 'next';
import { SendEmail } from 'src/services/email';
import { SendEmailError } from 'src/services/email/SendEmailError';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message, email } = req.body;

    if (!message || !email) {
      return res.status(400).json({
        message: 'Missing email or message'
      });
    }

    try {
      const response = await SendEmail.execute({
        from: {
          name: process.env.COMPANY_NAME || 'LinksforAll',
          email: process.env.EMAIL_FROM || ''
        },
        to: process.env.EMAIL_TO || '',
        subject: `[LinksForAll] New email from ${email}`,
        message
      });

      if (response.success) {
        return res.status(200).json(response);
      }
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
