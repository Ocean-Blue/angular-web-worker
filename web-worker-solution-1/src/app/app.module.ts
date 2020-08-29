import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibFileUploaderModule} from '../../projects/lib-file-uploader/src/lib/lib-file-uploader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LibFileUploaderModule.forRoot({
    //   webWokerRelativeFilePath: '../../../../src/app/file-uploader.worker',
    // }),
    LibFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
