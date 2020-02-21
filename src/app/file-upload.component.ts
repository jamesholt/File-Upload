import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './file-upload.component.html',
  styleUrls: [ './file-upload.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

fileToUpload: File = null;

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}