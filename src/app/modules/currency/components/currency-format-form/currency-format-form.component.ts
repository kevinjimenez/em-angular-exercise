import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-currency-format-form",
  templateUrl: "./currency-format-form.component.html",
  styleUrls: ["./currency-format-form.component.scss"],
})
export class CurrencyFormatFormComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly _formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this._formBuilder.group({
      useCode: ["", Validators.required],
      cents: ["", Validators.required],
      currencyPosition: ["", Validators.required],
      thousandIdentifier: ["", Validators.required],
      decimalSeparator: ["", Validators.required],
    });
  }
}
