export interface IEmailContactProps {
  name: string;
  email: string;
}

export interface ISendMailDTO {
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

export interface ISendEmailRepository {
  sendMail(data: ISendMailDTO): Promise<IEmailResponse>;
}
