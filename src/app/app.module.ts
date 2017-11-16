import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {
  IncidentsPage,
  ProfilePage,
  TabsPage,
  SettingsPage,
  IncidentDetailsPage,
  IncidentHomePage,
  IncidentActionsPage
} from '../pages/pages';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppVersion} from '@ionic-native/app-version';
import {IncidentPreviewComponent, IncidentActionRowComponent} from '../components/components';
import {IncidentsApi} from '../shared/shared';
import {TruncatePipe} from "../utils/utils";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    IncidentsPage,
    ProfilePage,
    SettingsPage,
    IncidentDetailsPage,
    IncidentHomePage,
    IncidentActionsPage,
    IncidentPreviewComponent,
    IncidentActionRowComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    IncidentsPage,
    ProfilePage,
    SettingsPage,
    IncidentDetailsPage,
    IncidentHomePage,
    IncidentActionsPage,
    IncidentPreviewComponent,
    IncidentActionRowComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IncidentsApi
  ]
})
export class AppModule {
}
