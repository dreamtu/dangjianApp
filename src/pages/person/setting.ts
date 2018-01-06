import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  testRadioOpen: boolean;
  testRadioResult;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}
  //性别选择
  openSex() {
    let alert = this.alertCtrl.create();
    alert.setTitle('性别');

    alert.addInput({
      type: 'radio',
      label: '男',
      value: '男',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: '女',
      value: '女'
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
}
