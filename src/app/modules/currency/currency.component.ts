import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CurrencyApiService } from "src/app/services/currency.service";
import { Currency } from "./currency-format/currency-format.typings";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.scss"],
})
export class CurrencyComponent implements OnInit {
  currencies: Currency[] = [];
  isLoading: boolean = true;

  constructor(
    private currencyService: CurrencyApiService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(
      (response) => {
        this.currencies = response.result;

        this.isLoading = false;
        this.ref.detectChanges();
      },
      (error) => {}
    );
  }

  onAddEditCurrency(payload: Currency) {
    this.currencyService.addCurrency(payload).subscribe(
      (response) => {
        console.log(response);
        this.currencies.unshift(payload);
        this.ref.detectChanges();
      },
      (error) => {}
    );
  }
}
