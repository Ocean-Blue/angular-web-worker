import {InjectionToken} from '@angular/core';

export const WEB_WORKER_RELATIVE_FILE_PATH = new InjectionToken<IFileUploaderModuleConfig>('WEB_WORKER_RELATIVE_FILE_PATH');

export interface IFileUploaderModuleConfig {
  webWokerRelativeFilePath: string;
}
