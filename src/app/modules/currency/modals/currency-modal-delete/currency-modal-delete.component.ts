import { Component, OnInit, Inject } from "@angular/core";
import { CurrencyTableComponent } from "../../components/currency-table/currency-table.component";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-currency-modal-delete",
  templateUrl: "./currency-modal-delete.component.html",
  styleUrls: ["./currency-modal-delete.component.scss"],
})
export class CurrencyModalDeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CurrencyTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  onDelete() {
    this.dialogRef.close(this.data);
  }
}
