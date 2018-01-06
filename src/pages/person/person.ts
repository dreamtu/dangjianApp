import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  constructor(public navCtrl: NavController) {  }

  //个人设置
  setting(){
    this.navCtrl.push("SettingPage");
  }
}
