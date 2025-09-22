export interface IEmailContactProps {
  name: string;
  email: string;
}

export interface IEmailMessageProps {
  from: IEmailContactProps;
  to: string;
  subject: string;
  message: string;
}

export interface IEmailRepository {
  sendMail(data: IEmailMessageProps): Promise<void>;
}
