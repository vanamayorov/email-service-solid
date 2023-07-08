import * as nodemailer from 'nodemailer';
import config from '../config/config.json';

export interface Mail {
  from: string;
  to: string;
  subject: string;
  html?: string;
}

export class EmailSender {
  private readonly _transporter: nodemailer.Transporter;

  constructor() {
    this._transporter = this.initTransporter();
  }

  private initTransporter(): nodemailer.Transporter {
    return nodemailer.createTransport({
      host: config.mailer.host,
      port: config.mailer.port,
      secure: config.mailer.secure,
      auth: config.mailer.auth,
    });
  }

  public async sendEmail(options: Mail): Promise<void> {
    await this._transporter.sendMail({
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
  }
}
