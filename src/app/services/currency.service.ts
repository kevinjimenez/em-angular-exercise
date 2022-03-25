import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { GetCurrencyResponseInterface } from "../interfaces/get-currency-response.interface";

@Injectable({
  providedIn: "root",
})
export class CurrencyApiService {
  public readonly apiUrl = environment.apiUrl;
  private readonly headers = {
    "X-API-KEY": environment.api_key,
  };

  constructor(public http: HttpClient) {}

  getCurrencies() {
    const url = this.apiUrl + `currency-format/`;

    return this.http
      .get<GetCurrencyResponseInterface>(url, {
        headers: this.headers,
      })
      .toPromise();
  }

  // --- Add the rest of your CRUD operations here ---

  //* Method create currency
  addCurrency() {
    const url = this.apiUrl + `currency-format/`;

    return this.http.get(url, {
      headers: this.headers,
    });
  }

  //* Method update currency
  updateCurrencu(id: number) {
    const url = this.apiUrl + `currency-format/`;

    return this.http.get(url, {
      headers: this.headers,
    });
  }

  //* Method delete currency
  deleteCurrency(id: number) {
    const url = this.apiUrl + `currency-format/`;

    return this.http.get(url, {
      headers: this.headers,
    });
  }
}
