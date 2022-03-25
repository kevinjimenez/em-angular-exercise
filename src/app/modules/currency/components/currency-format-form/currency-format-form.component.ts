import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import { CurrencyFormat } from "../../currency-format/currency-format.typings";

@Component({
  selector: "app-currency-format-form",
  templateUrl: "./currency-format-form.component.html",
  styleUrls: ["./currency-format-form.component.scss"],
})
export class CurrencyFormatFormComponent implements OnInit {
  form: FormGroup;
  @Input() format: CurrencyFormat;
  @Output() emitFormat: EventEmitter<CurrencyFormat | boolean> =
    new EventEmitter();
  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.form.valueChanges.pipe(debounceTime(250)).subscribe((_) => {
      if (this.form.valid) {
        this.emitFormat.emit(this.form.value);
      } else {
        this.emitFormat.emit(false);
      }
    });
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      useCode: [this.format?.useCode ?? false, Validators.required],
      cents: [
        this.format?.cents ?? "",
        [Validators.required, Validators.pattern("^[0-9]*$")],
      ],
      currencyPosition: [
        this.format?.currencyPosition ?? "BEFORE",
        Validators.required,
      ],
      thousandIdentifier: [
        this.format?.thousandIdentifier ?? ",",
        Validators.required,
      ],
      decimalSeparator: [
        this.format?.decimalSeparator ?? ".",
        Validators.required,
      ],
    });
  }

  //* Get field form
  get useCodeField() {
    return this.form.get("useCode");
  }

  get centsField() {
    return this.form.get("cents");
  }

  get currencyPositionField() {
    return this.form.get("currencyPosition");
  }
  get thousandIdentifierField() {
    return this.form.get("thousandIdentifier");
  }
  get decimalSeparatorField() {
    return this.form.get("decimalSeparator");
  }

  //* Get validate form
  get isCentsFieldInvalid() {
    return this.centsField.touched && this.centsField.invalid;
  }
}
