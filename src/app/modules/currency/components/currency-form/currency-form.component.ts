import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
  @Input() currency: Currency;
  @Output() emitCurrency: EventEmitter<Currency | boolean> = new EventEmitter();
  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.form.valueChanges.pipe(debounceTime(250)).subscribe((_) => {
      if (this.form.valid) {
        this.emitCurrency.emit(this.form.value);
      } else {
        this.emitCurrency.emit(false);
      }
    });
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      countryCode: [this.currency?.countryCode ?? "", Validators.required],
      languageIsoCode: [
        this.currency?.languageIsoCode ?? "",
        Validators.required,
      ],
      currencyCode: [this.currency?.countryCode ?? "", Validators.required],
    });
  }

  //* Get field form
  get languageIsoCodeField() {
    return this.form.get("languageIsoCode");
  }

  get countryCodeField() {
    return this.form.get("countryCode");
  }

  get currencyCodeField() {
    return this.form.get("currencyCode");
  }

  //* Get validate form
  get isLanguageIsoCodeFieldInvalid() {
    return (
      this.languageIsoCodeField.touched && this.languageIsoCodeField.invalid
    );
  }

  get isCountryCodeFieldInvalid() {
    return this.countryCodeField.touched && this.countryCodeField.invalid;
  }

  get isCurrencyCodeFieldInvalid() {
    return this.currencyCodeField.touched && this.currencyCodeField.invalid;
  }
}
