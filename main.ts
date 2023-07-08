import { EmailService } from './email.service';
import { GmailSender } from './senders/gmail.sender';
import { TemplateGenerator } from './template-generators/template-generator';

async function main() {
  const templateGenerator = new TemplateGenerator();
  const gmailSender = new GmailSender();
  const emailService = new EmailService(templateGenerator, gmailSender);

  await emailService.sendMonthlyEmail({
    from: 'i.m@gmail.com',
    to: 'test@email.com',
    subject: 'Test montly subject',
  });

  await emailService.sendWeeklyEmail({
    from: 'i.m@gmail.com',
    to: 'test@email.com',
    subject: 'Test weekly subject',
  });
}

main()
  .then(() => process.exit(0))
  .catch(console.log);
