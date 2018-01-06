import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DangyuanListPage} from "./dangyuanList";

@NgModule({
  declarations: [
    DangyuanListPage,
  ],
  imports: [
    IonicPageModule.forChild(DangyuanListPage),
  ],
  exports: [
    DangyuanListPage
  ]
})
export class DangyuanListPageModule {}
