import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-dangzhibu',
  templateUrl: 'dangzhibu.html'
})
export class DangzhibuPage {

  constructor(public navCtrl: NavController) {

  }

  //党员先锋
  dangyuanList(){
    this.navCtrl.push("DangyuanListPage");
  }

  //党建新闻
  dangjianNews(){
    this.navCtrl.push("DangjianNewsPage");
  }
}
