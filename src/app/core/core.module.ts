import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { CanvasComponent } from './canvas/canvas.component';
// import { HeaderTopComponent } from './header-top/header-top.component';
// import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
// import { ContentComponent } from './content/content.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { MonitorDialogComponent } from './header-top/monitor-dialog/monitor-dialog.component';
// import { AddWidgetDialogComponent } from './header-bottom/add-widget-dialog/add-widget-dialog.component';
// import { AuthComponent } from '../auth/auth.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    // CanvasComponent,
    // HeaderTopComponent,
    // HeaderBottomComponent,
    // ContentComponent,
    // SidebarComponent,
    // MonitorDialogComponent,
    // AddWidgetDialogComponent,
    // FooterComponent,
    // HeaderComponent,
    // AuthComponent
  ],
  exports: [
    // CanvasComponent,
    // HeaderTopComponent,
    // HeaderBottomComponent,
    // ContentComponent,
    // SidebarComponent,
    // MonitorDialogComponent,
    // AddWidgetDialogComponent,
    // FooterComponent
  ]
})
export class CoreModule { }
