import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { FeaturesComponent } from './features/features.component';
import { MembersComponent } from './members/members.component';
import { NotificationsComponent } from './notifications/notifications.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },  
  { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },  
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },    
  { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },  
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule', canActivate: [AuthGuard] }
  // { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}