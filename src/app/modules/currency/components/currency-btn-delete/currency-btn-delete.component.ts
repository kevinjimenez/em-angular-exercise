import { CurrencyModalDeleteComponent } from "./../../modals/currency-modal-delete/currency-modal-delete.component";
import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Currency } from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-btn-delete",
  templateUrl: "./currency-btn-delete.component.html",
  styleUrls: ["./currency-btn-delete.component.scss"],
})
export class CurrencyBtnDeleteComponent implements OnInit {
  @Input() currency: Currency;
  @Output() emitDeleteCurrency: EventEmitter<boolean> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  deleteCurrency() {
    const dialogRef = this.dialog.open(CurrencyModalDeleteComponent, {
      data: this.currency._id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.emitDeleteCurrency.emit(result);
      }
    });
  }
}
