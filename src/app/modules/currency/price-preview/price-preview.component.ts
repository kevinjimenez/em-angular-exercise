import { Component, Input, OnInit } from "@angular/core";

import { CurrencyFormat } from "../currency-format/currency-format.typings";
@Component({
  selector: "price-preview",
  templateUrl: "./price-preview.component.html",
  styleUrls: [],
})
export class PricePreview implements OnInit {
  // {
  //     "format": {
  //         "useCode": true,
  //         "cents": 2,
  //         "currencyPosition": "BEFORE",
  //         "thousandIdentifier": ",",
  //         "decimalSeparator": "."
  //     }
  // }
  priceFormat: string = "$1.234";
  @Input() set format(data: CurrencyFormat) {
    this.priceFormat = this.buildNumberFormat(data);
  }

  constructor() {}

  ngOnInit(): void {}

  buildNumberFormat(format: CurrencyFormat): string {
    let newNumberFormat = "";
    const [vacio, valor] = this.priceFormat.split("$");
    const [m, c] = valor.split(".");

    if (format.cents > 0) {
      newNumberFormat =
        `${m}${format.thousandIdentifier}${c}${format.decimalSeparator}`.padEnd(
          valor.length + 1 + format.cents,
          "0"
        );
    } else {
      newNumberFormat = `${m}${format.thousandIdentifier}${c}`;
    }

    if (format.currencyPosition === "BEFORE") {
      newNumberFormat = `${format.useCode ? "USD" : "$"}${newNumberFormat}`;
    } else {
      newNumberFormat = `${newNumberFormat}${format.useCode ? "USD" : "$"}`;
    }

    return newNumberFormat;
  }
}
