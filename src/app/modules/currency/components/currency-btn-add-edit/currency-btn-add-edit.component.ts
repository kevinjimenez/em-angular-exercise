import { CurrencyModalEditCreateComponent } from "../../modals/currency-modal-edit-create/currency-modal-edit-create.component";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Currency } from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-btn-add-edit",
  templateUrl: "./currency-btn-add-edit.component.html",
  styleUrls: ["./currency-btn-add-edit.component.scss"],
})
export class CurrencyBtnAddEditComponent implements OnInit {
  @Input() currency: Currency;
  @Output() emitCurrency: EventEmitter<Currency> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addEditCurrency() {
    const dialogRef = this.dialog.open(CurrencyModalEditCreateComponent, {
      data: this.currency,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.emitCurrency.emit(result);
    });
  }
}
