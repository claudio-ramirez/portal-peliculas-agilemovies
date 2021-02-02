// Angular
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";

// RXJS
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

// Services
import { AuthenticationService, LocalStorageService } from "../../services";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService, private localStorageService: LocalStorageService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error) => {
				if (error.status === 401) {
					let session = this.localStorageService.get("session");

					if (session.payload.refresh_token) {
						this.authenticationService.refresh(session.payload.refresh_token).subscribe(
							(data: any) => {
								this.localStorageService.set("session", data.data);

								location.reload();
							},
							(error: any) => {
								console.log("Error en el refreco del token", error);
							}
						);
					} else {
						this.authenticationService.logout();

						location.reload();
					}
				}

				const message = error.error.message || error.statusText;

				return throwError(message);
			})
		);
	}
}
