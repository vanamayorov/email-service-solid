import { EmailSender, Mail } from './senders/email.sender';
import { TemplateGenerator } from './template-generators/template-generator';
import { MonthlyReportEmailTemplate } from './templates/monthly-report.template';
import { WeeklyReportEmailTemplate } from './templates/weekly-report.template';

export class EmailService {
  constructor(
    private readonly _templateGenerator: TemplateGenerator,
    private readonly _gmailSender: EmailSender,
  ) {}

  public async sendWeeklyEmail(mailOptions: Mail): Promise<void> {
    const template = new WeeklyReportEmailTemplate({
      title: 'Weekly email',
      body: '<div>Email body</div>',
      image: 'https://nodemailer.com/nm_logo_200x136.png',
      weekNum: 2,
    });

    const html = await this._templateGenerator.generateEmail(template);

    await this._gmailSender.sendEmail({
      ...mailOptions,
      html,
    });
  }

  public async sendMonthlyEmail(mailOptions: Mail): Promise<void> {
    const month = new Date().getUTCMonth() + 1;
    const template = new MonthlyReportEmailTemplate({
      title: 'Monthly email',
      body: `<div>
                    Email body
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>`,
      image: 'https://nodemailer.com/nm_logo_200x136.png',
      month,
    });

    const html = await this._templateGenerator.generateEmail(template);

    await this._gmailSender.sendEmail({
      ...mailOptions,
      html,
    });
  }
}
