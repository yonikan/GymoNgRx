import { Component, OnInit } from '@angular/core';
// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ANIMATE_ON_ROUTE_ENTER } from '../core/router.transition';

const URL = 'http://localhost:3000/profile';

@Component({
  selector: 'gymo-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  
  isLogin: boolean = true;
  authPage: string = 'login';

  email: string;
  password: string;
  displayName: string;


  settingsPage: string = 'profile';
  
  constructor() { }

  ngOnInit() {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //     console.log("ImageUpload:uploaded:", item, status, response);
    // };
  }

  viewPage(currentPage: string) {
    this.settingsPage = currentPage;    
  }
}
