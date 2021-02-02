// Angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// RxJS
import { BehaviorSubject, Observable } from "rxjs";

// Services
import { LocalStorageService } from "./local-storage.service";

// Enviroments
import { environment } from "../../environments/environment";

@Injectable()
export class AuthenticationService {
	private apiUrl: string;

	private currentUserSubject: BehaviorSubject<any>;

	public currentUser: Observable<any>;

	constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
		this.apiUrl = environment.url;

		this.currentUserSubject = new BehaviorSubject<any>(this.localStorageService.get("session"));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): any {
		return this.currentUserSubject.value;
	}

	public activateUser(activate: boolean) {
		this.currentUserSubject.next(activate);
	}

	public login(_username: string, _password: string) {
		return this.httpClient.post(`${this.apiUrl}/auth/login`, { username: _username, password: _password });
	}

	public refresh(refresh_token: string) {
		return this.httpClient.post(`${this.apiUrl}/auth/refresh`, { refresh_token: refresh_token });
	}

	public logout() {
		this.localStorageService.clear();

		this.currentUserSubject.next(null);
	}
}
