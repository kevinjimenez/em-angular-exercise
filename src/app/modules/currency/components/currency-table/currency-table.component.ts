import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { Currency } from "../../currency-format/currency-format.typings";
import { CurrencyApiService } from "../../../../services/currency.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-currency-table",
  templateUrl: "./currency-table.component.html",
  styleUrls: ["./currency-table.component.scss"],
})
export class CurrencyTableComponent {
  @Input() currencies: Currency[] = [];
  constructor(
    private currencyService: CurrencyApiService,
    private snackBar: MatSnackBar,
    private ref: ChangeDetectorRef
  ) {}

  onEdit(payload: Currency) {
    const index = this.currencies.findIndex(
      (value) => value._id === payload._id
    );
    const id = payload._id;
    const data = payload;
    this.currencyService.updateCurrency(id, data).subscribe(
      (response) => {
        this.currencies[index] = payload;
        this.snackBar.open(response.message, "Done", {
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.ref.detectChanges();
      },
      (error) => {}
    );
  }

  onDelete(payload: string) {
    const index = this.currencies.findIndex((value) => value._id === payload);
    this.currencyService.deleteCurrency(payload).subscribe(
      (response) => {
        this.currencies.splice(index, 1);
        this.snackBar.open(response.message, "Done", {
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.ref.detectChanges();
      },
      (error) => {}
    );
  }
}
