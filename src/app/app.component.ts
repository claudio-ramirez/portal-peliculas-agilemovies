// Angular
import { Component } from '@angular/core';

// Services
import { AuthenticationService } from "./services";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "Sistema Rifa Parcelas";

	public showNavbar: boolean = false;

	constructor(private authenticationService: AuthenticationService) {
		this.authenticationService.currentUser.subscribe((data: any) => {
			return this.showNavbar = data;
		});
	}
}
