## Email Service implementation following SOLID principles.

### Task:
Create an email service that can work with different email templates. Create some domain service with some kind of business logic (you can come up with any functionality) that will use this email service to send emails. All written code must follow SOLID principles.

### Notes:
- templates may have different content: subject, texts, links, images etc.
- it's up to you to set up a real email sending functionality via email server. This isn't a must-have requirement. The goal is to create a service that follows all SOLID principles.
- email "from" must be set from business logic level as well, Email service mustn't define email "from" by itself
- as a result I must be able to send any email template to any email