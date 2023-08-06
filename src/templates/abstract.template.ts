export abstract class AbstractTemplate<TemplateParams extends {}> {
  protected abstract readonly _templatePath: string;
  constructor(protected readonly _params: TemplateParams) {}

  public abstract getHTML(): Promise<string>;
}
