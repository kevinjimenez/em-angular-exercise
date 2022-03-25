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
  addCurrency() {
    return this.http.get(this.url, {
      headers: this.headers,
    });
  }

  //* Method update currency
  updateCurrencu(id: number) {
    return this.http.get(this.url, {
      headers: this.headers,
    });
  }

  //* Method delete currency
  deleteCurrency(id: number) {
    return this.http.get(this.url, {
      headers: this.headers,
    });
  }
}
