import { useMutation } from '@tanstack/react-query';
import { IEmailResponse } from '@services/email/IEmailRepository';
import { SendEmailError } from '../SendEmailError';

interface ISendEmailProps {
  email: string;
  message: string;
}

function useSendEmail() {
  const {
    status,
    data,
    mutate: handleSendEmail
  } = useMutation({
    mutationFn: handleSubmit
  });

  async function handleSubmit({ email, message }: ISendEmailProps) {
    const rawData = {
      email,
      message
    };
    const request = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawData)
    });

    const response: IEmailResponse = await request.json();
    if (response.success) {
      return response;
    }

    throw new SendEmailError('Failed to send message');
  }

  return { status, data, handleSendEmail };
}

export { useSendEmail };
