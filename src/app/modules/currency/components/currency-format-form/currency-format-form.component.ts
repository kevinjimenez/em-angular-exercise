import { CurrencyFormat } from "./../../currency-format/currency-format.component";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-currency-format-form",
  templateUrl: "./currency-format-form.component.html",
  styleUrls: ["./currency-format-form.component.scss"],
})
export class CurrencyFormatFormComponent implements OnInit {
  form: FormGroup;
  @Output() emitFormat: EventEmitter<CurrencyFormat | boolean> =
    new EventEmitter();
  constructor(private readonly _formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(250)).subscribe((values) => {
      if (this.form.valid) {
        this.emitFormat.emit(this.form.value);
      } else {
        this.emitFormat.emit(false);
      }
    });
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      useCode: [false, Validators.required],
      cents: ["", Validators.required],
      currencyPosition: ["", Validators.required],
      thousandIdentifier: ["", Validators.required],
      decimalSeparator: ["", Validators.required],
    });
  }
}
