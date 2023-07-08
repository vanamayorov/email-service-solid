import { AbstractTemplate } from '../templates/abstract.template';

export interface TemplateGenerator {
  generateEmail<TemplatePayload extends {}>(
    template: AbstractTemplate<TemplatePayload>,
  ): Promise<string>;
}

export class TemplateGenerator implements TemplateGenerator {
  public async generateEmail<TemplatePayload extends {}>(
    template: AbstractTemplate<TemplatePayload>,
  ): Promise<string> {
    const html = await template.getHTML();
    return html;
  }
}
