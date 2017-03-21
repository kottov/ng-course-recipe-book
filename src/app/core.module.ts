import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { HomeComponent } from './home.component';
@NgModule({
    declarations: [HomeComponent, DropdownDirective],
    exports: [DropdownDirective]
})
export class CoreModule {}
