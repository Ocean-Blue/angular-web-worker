import {ModuleWithProviders, NgModule} from '@angular/core';
import { LibFileUploaderComponent } from './lib-file-uploader.component';
import {IFileUploaderModuleConfig, WEB_WORKER_RELATIVE_FILE_PATH} from './file-uploader-module-config.interface';

@NgModule({
  declarations: [LibFileUploaderComponent],
  imports: [
  ],
  exports: [LibFileUploaderComponent]
})
export class LibFileUploaderModule {
  // // Injecting file path of the web worker through token does not work
  // static forRoot(cfg?: IFileUploaderModuleConfig): ModuleWithProviders<LibFileUploaderModule> {
  //   console.log(`Config: ${JSON.stringify(cfg)}`);
  //   return {
  //     ngModule: LibFileUploaderModule,
  //     providers: [
  //       {
  //         provide: WEB_WORKER_RELATIVE_FILE_PATH,
  //         useValue: cfg?.webWokerRelativeFilePath || '',
  //       },
  //     ],
  //   };
  // }
}
