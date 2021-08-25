import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CurrencyApiService {
	public readonly apiUrl = environment.apiUrl;
    
    constructor(public http: HttpClient) { }

    getCurrencies() {
        const url = this.apiUrl + `currency-format/`;
    	return this.http.get(url).toPromise();
    }

    // --- Add the rest of your CRUD operations here ---

}