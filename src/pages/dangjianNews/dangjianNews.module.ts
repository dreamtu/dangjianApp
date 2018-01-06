import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DangjianNewsPage} from "./dangjianNews";

@NgModule({
  declarations: [
    DangjianNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(DangjianNewsPage),
  ],
  exports: [
    DangjianNewsPage
  ]
})
export class DangjianNewsPageModule {}
