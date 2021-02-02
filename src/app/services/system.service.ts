// Angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// RXJS
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable()
export class SystemService {
	private apiUrl: string;

	constructor(private httpClient: HttpClient) {
		this.apiUrl = environment.url;
	}

	// Users
	public getUserInformationInSession(): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/user/me`);
	}

	// Movies
	public getPremiereMovies(page: number): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/movies/now_playing?page=${page}`);
	}

	public getMostPopularMovies(page: number): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/movies/popular?page=${page}`);
	}

	public getActorsPerMovies(idMovie: number): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/movies/${idMovie}/actors`);
	}
}
