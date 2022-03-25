import { CurrencyModalEditCreateComponent } from "./../../modals/currency-modal-edit-create/currency-modal-edit-create.component";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Currency } from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-btn-add",
  templateUrl: "./currency-btn-add.component.html",
  styleUrls: ["./currency-btn-add.component.scss"],
})
export class CurrencyBtnAddComponent implements OnInit {
  @Output() emitNewCurrency: EventEmitter<Currency> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addCurrency() {
    const dialogRef = this.dialog.open(CurrencyModalEditCreateComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.emitNewCurrency.emit(result);
    });
  }
}
