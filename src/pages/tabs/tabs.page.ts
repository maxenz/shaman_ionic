import { Component } from '@angular/core';

import { IncidentsPage, ProfilePage, SettingsPage } from '../pages';

@Component({
  templateUrl: 'tabs.page.html'
})
export class TabsPage {

  tab1Root = IncidentsPage;
  tab2Root = SettingsPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
