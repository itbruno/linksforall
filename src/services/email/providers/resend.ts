import { Resend } from 'resend';
import {
  ISendMailDTO,
  ISendEmailRepository,
  IEmailResponse
} from '../SendEmailRepository';

export class ResendMailProvider implements ISendEmailRepository {
  private resend;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not defined');
    }

    this.resend = new Resend(apiKey);
  }

  async sendMail(messageData: ISendMailDTO): Promise<IEmailResponse> {
    const { from, message, subject, to } = messageData;

    try {
      const { data, error } = await this.resend.emails.send({
        from: `${from.name} <${from.email}>`,
        to: [to],
        subject,
        html: message
      });

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return {
        success: true,
        messageId: data?.id
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || 'Unknown error when sending email with Resend'
      };
    }
  }
}
