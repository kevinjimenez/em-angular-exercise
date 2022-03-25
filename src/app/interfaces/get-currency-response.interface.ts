import { Currency } from "../modules/currency/currency-format/currency-format.typings";

export interface GetCurrencyResponseInterface {
  total: number;
  result: Currency[];
}
