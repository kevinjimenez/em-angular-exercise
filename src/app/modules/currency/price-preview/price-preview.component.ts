import {
    Component,
    Input,
    OnInit,
    SimpleChanges,
    OnChanges
  } from '@angular/core';
  
  import { CurrencyFormat } from '../currency-format/currency-format.typings';
  @Component({
    selector: 'price-preview',
    templateUrl: './price-preview.component.html',
    styleUrls: [],
  })
  export class PricePreview implements OnInit, OnChanges {

    // {
    //     "format": {
    //         "useCode": true,
    //         "cents": 2,
    //         "currencyPosition": "BEFORE",
    //         "thousandIdentifier": ",",
    //         "decimalSeparator": "."
    //     }
    // }
    priceFormat: string = "$1.234";

    @Input() format: CurrencyFormat;

    constructor() { }
  

    
    ngOnInit(): void {
     
    }
  
    ngOnChanges(changes: SimpleChanges): void {

    }
  }
  