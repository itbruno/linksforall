import { SendEmailUseCase } from './SendEmailUseCase';
import { IEmailRepository } from './IEmailRepository';
import { SendEmailError } from './SendEmailError';

describe('Email service', () => {
  test('should send email successfully', async () => {
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

  test('should not send email', async () => {
    const emailRepositoryMock: IEmailRepository = {
      sendMail: jest.fn().mockResolvedValue({
        success: false,
        messageId: 'mocked-id'
      })
    };

    const sendEmail = new SendEmailUseCase(emailRepositoryMock);

    expect(async () => {
      await sendEmail.execute({
        from: {
          name: 'John Doe',
          email: 'johndoe@gmail.com'
        },
        to: 'develivery@resend.dev',
        subject: 'Hello test',
        message: 'This is a test'
      });
    }).rejects.toBeInstanceOf(SendEmailError);
  });
});
