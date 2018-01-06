import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonPage} from "../person/person";
import {DangzhibuPage} from "../dangzhibu/dangzhibu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "puppies";
  constructor(public navCtrl: NavController) {}

  //党建新闻
  dangjianNews(){
    this.navCtrl.push("DangjianNewsPage");
  }

  //党支部
  dangzhibu(){
    this.navCtrl.push(DangzhibuPage);
  }

  //党员列表
  dangyuanList(){
    this.navCtrl.push("DangyuanListPage");
  }

  //个人中心
  goPerson(){
    this.navCtrl.push(PersonPage);
  }
}
