import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CurrencyBtnAddEditComponent } from "../../components/currency-btn-add-edit/currency-btn-add-edit.component";
import {
  Currency,
  CurrencyFormat,
} from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-modal-edit-create",
  templateUrl: "./currency-modal-edit-create.component.html",
  styleUrls: ["./currency-modal-edit-create.component.scss"],
})
export class CurrencyModalEditCreateComponent implements OnInit {
  payloadFormat: CurrencyFormat | boolean;
  payloadCurrency: Currency | boolean;
  constructor(
    public dialogRef: MatDialogRef<CurrencyBtnAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Currency
  ) {}

  ngOnInit(): void {}

  onCurrency(payload: Currency | boolean) {
    if (payload) {
      this.payloadCurrency = payload;
    } else {
      this.payloadCurrency = payload;
    }
  }

  onFormat(payload: CurrencyFormat | boolean) {
    if (payload) {
      this.payloadFormat = payload;
    } else {
      this.payloadFormat = payload;
    }
  }

  onSave() {
    let dataCurrency: Currency;
    if (this.data) {
      dataCurrency = {
        ...this.data,
        ...(this.payloadCurrency as Currency),
        format: (this.payloadFormat as CurrencyFormat) ?? this.data.format,
      };
    } else {
      dataCurrency = {
        ...(this.payloadCurrency as Currency),
        format: this.payloadFormat as CurrencyFormat,
      };
    }
    this.dialogRef.close(dataCurrency);
  }
}
