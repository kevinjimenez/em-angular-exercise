import { CurrencyModalDeleteComponent } from "./../../modals/currency-modal-delete/currency-modal-delete.component";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-currency-btn-delete",
  templateUrl: "./currency-btn-delete.component.html",
  styleUrls: ["./currency-btn-delete.component.scss"],
})
export class CurrencyBtnDeleteComponent implements OnInit {
  @Output() emitDeleteCurrency: EventEmitter<boolean> = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  deleteCurrency() {
    const dialogRef = this.dialog.open(CurrencyModalDeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.emitDeleteCurrency.emit(false);
  }
}
