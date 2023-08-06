import * as ejs from 'ejs';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { AbstractTemplate } from './abstract.template';
import { WeeklyTemplateParams } from './interfaces/weekly-template-params.interface';

export class WeeklyReportEmailTemplate extends AbstractTemplate<WeeklyTemplateParams> {
  protected readonly _templatePath = resolve(
    __dirname,
    'ejs/weekly.template.ejs',
  );

  constructor(weeklyParams: WeeklyTemplateParams) {
    super(weeklyParams);
  }

  public async getHTML(): Promise<string> {
    const file = await readFile(this._templatePath, { encoding: 'utf8' });
    return ejs.render(file, this._params);
  }
}
