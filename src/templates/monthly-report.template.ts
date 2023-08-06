import * as ejs from 'ejs';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { AbstractTemplate } from './abstract.template';
import { MonthlyTemplateParams } from './interfaces/monthly-template-params';

export class MonthlyReportEmailTemplate extends AbstractTemplate<MonthlyTemplateParams> {
  protected readonly _templatePath = resolve(
    __dirname,
    'ejs/monthly.template.ejs',
  );

  constructor(params: MonthlyTemplateParams) {
    super(params);
  }

  public async getHTML(): Promise<string> {
    const file = await readFile(this._templatePath, { encoding: 'utf8' });
    return ejs.render(file, this._params);
  }
}
