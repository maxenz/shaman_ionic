import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {UserSettingsModel} from "../models/models";
import {Observable} from "rxjs/Observable";
import {AppSettingsService} from "./shared";

@Injectable()
export class AuthService {

  currentUser: UserSettingsModel;

  constructor(private appSettingsService: AppSettingsService) {

  }

  public login(credentials) {
    if (credentials.license === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.license === "email");
        this.currentUser = new UserSettingsModel();
        this.currentUser.license = credentials.license;
        observer.next(access);
        observer.complete();
      });
    }
  }

  public getUserInfo() : UserSettingsModel {
    return this.appSettingsService.getSettings();
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
