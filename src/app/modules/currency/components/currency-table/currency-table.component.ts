import { Component, OnInit, Input } from "@angular/core";
import { Currency } from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-table",
  templateUrl: "./currency-table.component.html",
  styleUrls: ["./currency-table.component.scss"],
})
export class CurrencyTableComponent {
  @Input() currencies: Currency[] = [];

  onEdit(payload: Currency) {
    alert("edit");
  }

  onDelete(payload: boolean) {
    alert("delete");
  }
}
