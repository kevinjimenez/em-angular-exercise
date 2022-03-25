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
    this.currencyService
      .getCurrencies()
      .then((response) => {
        this.currencies = response.result;

        this.isLoading = false;
        this.ref.detectChanges();
      })
      .catch((err) => {});
  }

  addCurrency() {
    // --- Add Currency button ---
  }

  onNewCurrency(payload: Currency) {
    console.log(payload);
  }
}
