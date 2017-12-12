import {AutoCompleteService} from 'ionic2-auto-complete';
import {Http} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {AppSettingsService} from "./shared";

@Injectable()
export class AutocompleteReasonsService implements AutoCompleteService {
  labelAttribute = "description";

  constructor(private http: Http,
              private appSettingsService: AppSettingsService) {
  }

  getResults(keyword: string) {
    return this.appSettingsService.getReasons()
      .map(
        result => {
          return result.filter(item => item.description.toLowerCase().startsWith(keyword.toLowerCase()));
        }
      )
  }
}
