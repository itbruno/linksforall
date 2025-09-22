import { SendEmailUseCase } from './SendEmailUseCase';
import { ResendMailProvider } from './providers/resend';

const ResendProvider = new ResendMailProvider();
export const SendEmail = new SendEmailUseCase(ResendProvider);
