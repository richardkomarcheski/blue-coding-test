import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_KEY, giphySearchEndpoint } from './giphy.constants';

@Injectable({ providedIn: 'root' })
export class GiphyService {
	constructor(private httpClient: HttpClient) {}

	searchGiphy(searchValue: string) {
		let body = { api_key: API_KEY, q: searchValue };
		return this.httpClient.get(giphySearchEndpoint, { params: body }).pipe(map((res) => res['data']));
	}
}
