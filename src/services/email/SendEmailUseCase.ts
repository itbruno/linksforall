import { IEmailRepository, SendMailDTO } from './IEmailRepository';
import { SendEmailError } from './SendEmailError';

export class SendEmailUseCase {
  constructor(private mailProvider: IEmailRepository) {}

  async execute(data: SendMailDTO) {
    const response = await this.mailProvider.sendMail(data);

    if (!response.success) {
      throw new SendEmailError(response.error);
    }

    return response;
  }
}
