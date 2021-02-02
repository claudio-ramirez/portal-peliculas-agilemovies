// Angular
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

// Services
import { AuthenticationService } from "../../services";

@Injectable({ providedIn: "root" })
export class AuthenticationGuard implements CanActivate {
	constructor(private router: Router, private authenticationService: AuthenticationService) {}

	canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
		const currentUser = this.authenticationService.currentUserValue;

		if (currentUser) {
			return true;
		}

		this.router.navigate(["/login"], { queryParams: { returnUrl: routerStateSnapshot.url } });

		return false;
	}
}
