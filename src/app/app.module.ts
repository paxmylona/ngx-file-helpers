import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxFileHelpersCopyModule } from 'ngx-file-helpers-copy';

import { AppComponent } from './app.component';
import { ReadModePipe } from './read-mode.pipe';
import { FilePickerDemoComponent } from './file-picker-demo/file-picker-demo.component';
import { FileDropzoneDemoComponent } from './file-dropzone-demo/file-dropzone-demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    NgxFileHelpersCopyModule
  ],
  declarations: [
    AppComponent,
    ReadModePipe,
    FilePickerDemoComponent,
    FileDropzoneDemoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
