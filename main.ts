import { EmailService } from './email.service';
import { EmailSender } from './senders/email.sender';
import { TemplateGenerator } from './template-generators/template-generator';

async function main() {
  const templateGenerator = new TemplateGenerator();
  const emailSender = new EmailSender();
  const emailService = new EmailService(templateGenerator, emailSender);

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
