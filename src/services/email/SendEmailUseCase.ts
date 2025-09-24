import { IEmailRepository, IEmailMessageProps } from './IEmailRepository';
import { SendEmailError } from './SendEmailError';

export class SendEmailUseCase {
  constructor(private emailClient: IEmailRepository) {}

  async execute(data: IEmailMessageProps) {
    try {
      await this.emailClient.sendMail(data);
    } catch (err) {
      throw new SendEmailError("Can't send the e-mail", err);
    }
  }
}
