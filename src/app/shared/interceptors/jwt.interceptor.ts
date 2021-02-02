// Angular
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";

// RXJS
import { Observable } from "rxjs";

// Services
import { AuthenticationService, LocalStorageService } from "../../services";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService, private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let currentUser = this.authenticationService.currentUserValue;

		let session = this.localStorageService.get("session");

		if (currentUser) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${session.payload.token}`,
				},
			});
		}

		return next.handle(request);
	}
}
