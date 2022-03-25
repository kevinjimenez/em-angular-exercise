import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Currency } from "../../currency-format/currency-format.typings";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-currency-form",
  templateUrl: "./currency-form.component.html",
  styleUrls: ["./currency-form.component.scss"],
})
export class CurrencyFormComponent implements OnInit {
  form: FormGroup;
  @Output() emitCurrency: EventEmitter<Currency | boolean> = new EventEmitter();
  constructor(private readonly _formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(250)).subscribe((values) => {
      if (this.form.valid) {
        this.emitCurrency.emit(this.form.value);
      } else {
        this.emitCurrency.emit(false);
      }
    });
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      countryCode: ["", Validators.required],
      languageIsoCode: ["", Validators.required],
      currencyCode: ["", Validators.required],
    });
  }
}
