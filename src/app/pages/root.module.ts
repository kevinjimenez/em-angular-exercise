import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CoreModule } from '../_metronic/core';
import { RootComponent } from './root/root.component';
import { CurrencyModule } from '../modules/currency/currency.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    CurrencyModule
  ],
})
export class RootModule { }