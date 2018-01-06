import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {PersonPage} from "../person/person";
import {DangzhibuPage} from "../dangzhibu/dangzhibu";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DangzhibuPage;
  tab3Root = PersonPage;

  constructor() {

  }
}
