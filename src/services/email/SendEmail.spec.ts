import { SendEmailUseCase } from './SendEmailUseCase';
import { IEmailRepository } from './IEmailRepository';

describe('SendEmail', () => {
  test('should send email successfully with mock', async () => {
    const emailRepositoryMock: IEmailRepository = {
      sendMail: jest.fn().mockResolvedValue({
        success: true,
        messageId: 'mocked-id'
      })
    };

    const sendEmail = new SendEmailUseCase(emailRepositoryMock);

    const response = await sendEmail.execute({
      from: {
        name: 'John Doe',
        email: 'johndoe@gmail.com'
      },
      to: 'develivery@resend.dev',
      subject: 'Hello test',
      message: 'This is a test'
    });

    expect(response.success).toBe(true);
    expect(response.messageId).toBe('mocked-id');
    expect(emailRepositoryMock.sendMail).toHaveBeenCalledTimes(1);
  });
});
