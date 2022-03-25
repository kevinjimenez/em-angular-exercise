import { CommonModule } from "@angular/common";
import { CurrencyApiService } from "src/app/services/currency.service";
import { CurrencyComponent } from "./currency.component";
import { CurrencyFormat } from "./currency-format/currency-format.component";
import { MaterialModule } from "./../../material/material.module";
import { NgModule } from "@angular/core";
import { PricePreview } from "./price-preview/price-preview.component";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { CurrencyTableComponent } from "./components/currency-table/currency-table.component";
import { CurrencyBtnDeleteComponent } from "./components/currency-btn-delete/currency-btn-delete.component";
import { CurrencyFormComponent } from "./components/currency-form/currency-form.component";
import { CurrencyFormatFormComponent } from "./components/currency-format-form/currency-format-form.component";
import { CurrencyBtnAddEditComponent } from "./components/currency-btn-add-edit/currency-btn-add-edit.component";
import { CurrencyModalEditCreateComponent } from "./modals/currency-modal-edit-create/currency-modal-edit-create.component";
import { CurrencyModalDeleteComponent } from "./modals/currency-modal-delete/currency-modal-delete.component";
import { ReactiveFormsModule } from "@angular/forms";
// import {ErrorsRoutingModule} from './errors-routing.module';

const routes: Routes = [
  {
    path: "",
    component: CurrencyComponent,
    children: [
      // {
      //   path: 'your-path',
      //   component: YourComponent,
      // },
      // { path: '', redirectTo: 'accordion', pathMatch: 'full' },
      // { path: '**', redirectTo: 'accordion', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule, CurrencyComponent],
  declarations: [
    CurrencyComponent,
    CurrencyFormat,
    PricePreview,
    CurrencyTableComponent,
    CurrencyBtnDeleteComponent,
    CurrencyFormComponent,
    CurrencyFormatFormComponent,
    CurrencyBtnAddEditComponent,
    CurrencyModalEditCreateComponent,
    CurrencyModalDeleteComponent,
  ],
  providers: [CurrencyApiService],
})
export class CurrencyModule {}
