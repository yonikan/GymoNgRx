import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'gymo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedin;  
  testArr: string[];

  constructor(public authService: AuthService, public headerService: HeaderService) { }

  ngOnInit() {
    this.isLoggedin = this.authService.isLoggedin();    
    this.testArr = this.headerService.getActions();
    // this.testArr = [
    //   'back',
    //   'add_widget',
    //   'save_dashboard'
    // ];
  }

}
