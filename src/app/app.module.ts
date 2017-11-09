import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {IncidentsPage, ProfilePage, TabsPage, SettingsPage} from '../pages/pages';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IncidentPreviewComponent} from '../components/incident-preview/incident-preview.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    IncidentsPage,
    ProfilePage,
    SettingsPage,
    IncidentPreviewComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    IncidentsPage,
    ProfilePage,
    SettingsPage,
    IncidentPreviewComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
