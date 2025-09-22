import { IEmailRepository, IEmailMessageProps } from './IEmailRepository';

export class SendEmailUseCase {
  constructor(private emailClient: IEmailRepository) {}

  async execute(data: IEmailMessageProps) {
    try {
      await this.emailClient.sendMail(data);
    } catch (err) {
      throw new Error("Can't send the e-mail");
    }
  }
}
