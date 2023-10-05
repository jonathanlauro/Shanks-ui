import { NgModule } from '@angular/core';
import { ShanksUiComponent } from './shanks-ui.component';
import { ButtonComponent } from './components';
import { ToltipDirective } from './directives/toltip/toltip.directive';



@NgModule({
  declarations: [
    ShanksUiComponent,
    ButtonComponent,
    ToltipDirective,
  ],
  imports: [
  ],
    exports: [
        ShanksUiComponent,
        ButtonComponent,
        ToltipDirective,
    ]
})
export class ShanksUiModule { }
