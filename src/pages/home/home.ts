import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonPage} from "../person/person";
import {DangzhibuPage} from "../dangzhibu/dangzhibu";
import {AppGlobal, AppService} from "../../app/app.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "news1";
  constructor(public navCtrl: NavController,private appService: AppService, public http: HttpClient) {}

  ionViewDidEnter() {
    this.getNews(this.pet);
  }

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

  //新闻获取
  getNews(index:any) {
    this.http.get(AppGlobal.api + '/test/accountList', {}).subscribe((data: any) => {
      console.log(data);
    }, ( err: HttpErrorResponse) => {
      this.appService.handleError(err);
    });
  }
}
