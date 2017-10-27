import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { AddWidgetDialogComponent } from './add-widget-dialog/add-widget-dialog.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'gymo-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}] // adds the URL location service  
})
export class HeaderBottomComponent implements OnInit {

    @Input() actionsList: any[];
    // currentPage;

    constructor(
        public dialog: MdDialog,
        private router: Router,
        public authService: AuthService,
        private location: Location
     ) { }
  
    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
      const actionsList: SimpleChange = changes.actionsList;
      console.log('prev value: ', actionsList.previousValue);
      console.log('got name: ', actionsList.currentValue);
    }

    openCreateWidgetDialog() {
      this.dialog.open(AddWidgetDialogComponent);
    }



    goBack() {    
      this.location.back();      
    }
}
