import { ISendEmailRepository, ISendMailDTO } from './SendEmailRepository';
import { SendEmailError } from './SendEmailError';

export class SendEmailUseCase {
  constructor(private mailProvider: ISendEmailRepository) {}

  async execute(data: ISendMailDTO) {
    const response = await this.mailProvider.sendMail(data);

    if (!response.success) {
      throw new SendEmailError(response.error);
    }

    return response;
  }
}
