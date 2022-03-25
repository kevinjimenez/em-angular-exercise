import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { GetCurrencyResponseInterface } from "../interfaces/get-currency-response.interface";
import { Currency } from "../modules/currency/currency-format/currency-format.typings";

@Injectable({
  providedIn: "root",
})
export class CurrencyApiService {
  public readonly apiUrl = environment.apiUrl;
  private readonly url = this.apiUrl + `currency-format/`;
  private readonly headers = {
    "X-API-KEY": environment.api_key,
  };

  constructor(public http: HttpClient) {}

  getCurrencies() {
    return this.http.get<GetCurrencyResponseInterface>(this.url, {
      headers: this.headers,
    });
  }

  // --- Add the rest of your CRUD operations here ---

  //* Method create currency
  addCurrency(currency: Currency) {
    return this.http.post<{ message: string }>(this.url, currency, {
      headers: this.headers,
    });
  }

  //* Method update currency
  updateCurrency(id: string, currency: Partial<Currency>) {
    return this.http.put<{ message: string }>(this.url + id, currency, {
      headers: this.headers,
    });
  }

  //* Method delete currency
  deleteCurrency(id: string) {
    return this.http.delete<{ message: string }>(this.url + id, {
      headers: this.headers,
    });
  }
}
