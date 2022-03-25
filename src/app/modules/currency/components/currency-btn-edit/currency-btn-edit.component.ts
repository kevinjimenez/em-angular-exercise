import { CurrencyModalEditCreateComponent } from "./../../modals/currency-modal-edit-create/currency-modal-edit-create.component";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Currency } from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-btn-edit",
  templateUrl: "./currency-btn-edit.component.html",
  styleUrls: ["./currency-btn-edit.component.scss"],
})
export class CurrencyBtnEditComponent implements OnInit {
  @Output() emitEditCurrency: EventEmitter<Currency> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  editCurrency() {
    const dialogRef = this.dialog.open(CurrencyModalEditCreateComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.emitEditCurrency.emit(undefined);
  }
}
