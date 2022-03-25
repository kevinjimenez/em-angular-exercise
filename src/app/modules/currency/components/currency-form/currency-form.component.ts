import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-currency-form",
  templateUrl: "./currency-form.component.html",
  styleUrls: ["./currency-form.component.scss"],
})
export class CurrencyFormComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly _formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this._formBuilder.group({
      countryCode: ["", Validators.required],
      languageIsoCode: ["", Validators.required],
      currencyCode: ["", Validators.required],
    });
  }
}
