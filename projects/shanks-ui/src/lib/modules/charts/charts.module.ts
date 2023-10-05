import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColumnBarComponent} from './components';
import {ShanksUiModule} from "../../shanks-ui.module";


@NgModule({
  declarations: [
    ColumnBarComponent
  ],
    imports: [
        CommonModule,
        ShanksUiModule
    ],
  exports: [
      ColumnBarComponent
  ]
})
export class ChartsModule { }
