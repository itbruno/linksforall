export interface IEmailContactProps {
  name: string;
  email: string;
}

export interface SendMailDTO {
  from: IEmailContactProps;
  to: string;
  subject: string;
  message: string;
}

export interface IEmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface IEmailRepository {
  sendMail(data: SendMailDTO): Promise<IEmailResponse>;
}
