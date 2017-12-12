import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
import {
  IncidentsPage,
  ProfilePage,
  TabsPage,
  SettingsPage,
  IncidentDetailsPage,
  IncidentHomePage,
  IncidentActionsPage,
  MedicalHistoryPage,
  LoginPage,
  AccessTimePage,
  SplashPage,
  IncidentFinalPage
} from '../pages/pages';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppVersion} from '@ionic-native/app-version';
import {AppPreferences} from "@ionic-native/app-preferences";
import {IncidentPreviewComponent, IncidentActionRowComponent, MedicalHistoryRowComponent} from '../components/components';
import {
  IncidentsApi,
  ViewsUtilsService,
  AppSettingsService,
  AuthService,
  AutocompleteDiagnosisService,
  AutocompleteReasonsService
} from '../shared/shared';
import {TruncatePipe} from "../utils/utils";
import {AutoCompleteModule} from 'ionic2-auto-complete';

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
    MedicalHistoryPage,
    LoginPage,
    AccessTimePage,
    SplashPage,
    IncidentFinalPage,
    IncidentPreviewComponent,
    IncidentActionRowComponent,
    MedicalHistoryRowComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    HttpModule,
    IonicStorageModule.forRoot(),
    AutoCompleteModule
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
    MedicalHistoryPage,
    LoginPage,
    AccessTimePage,
    SplashPage,
    IncidentFinalPage,
    IncidentPreviewComponent,
    IncidentActionRowComponent,
    MedicalHistoryRowComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IncidentsApi,
    ViewsUtilsService,
    AppPreferences,
    AppSettingsService,
    AuthService,
    AutocompleteDiagnosisService,
    AutocompleteReasonsService
  ]
})
export class AppModule {
}
