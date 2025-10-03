export class SendEmailError extends Error {
  public readonly originalError?: unknown;

  constructor(
    message: string = 'Failed to send e-mail',
    originalError?: unknown
  ) {
    super(message);
    this.name = 'EmailSendFailedError';
    this.originalError = originalError;
  }
}
