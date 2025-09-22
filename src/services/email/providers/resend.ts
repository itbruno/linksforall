import { Resend } from 'resend';
import { IEmailMessageProps, IEmailRepository } from '../IEmailRepository';

export class ResendMailProvider implements IEmailRepository {
  private resend;
  private RESEND_TOKEN = process.env.RESEND_API_KEY;

  constructor() {
    this.resend = new Resend(this.RESEND_TOKEN);
  }

  async sendMail(messageData: IEmailMessageProps): Promise<void> {
    const { from, message, subject, to } = messageData;
    const { data, error } = await this.resend.emails.send({
      from: `${from.name} <${from.email}>`,
      to: [to],
      subject,
      html: message
    });

    if (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}
