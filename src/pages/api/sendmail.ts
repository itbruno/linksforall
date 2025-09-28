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
      res.status(400).json({
        message: `Missing message or email params`
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

      throw new SendEmailError('Email cannot be sent.');
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err
      });
    }
  }
}
