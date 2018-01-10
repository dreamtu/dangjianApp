import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppService} from "../../app/app.service";

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  constructor(public navCtrl: NavController,public appService: AppService) {  }

  ionViewDidEnter() {
    if (!localStorage.getItem("userid")) {
      this.navCtrl.push('LoginPage');
    }
  }

  //个人设置
  setting(){
    this.navCtrl.push("SettingPage");
  }
}
