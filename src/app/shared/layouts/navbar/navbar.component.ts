// Angular
import { Component, OnInit } from "@angular/core";

// Services
import { AuthenticationService, LocalStorageService } from "../../../services";

@Component({
	selector: "app-navbar",
	styleUrls: ["./navbar.component.scss"],
	templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
	public logo: string;
	public user: string;

	constructor(private authenticationService: AuthenticationService, private localStorageService: LocalStorageService) {
		this.logo = "assets/images/logo.png";
		this.user = "";
	}

	public ngOnInit() {
		this.authenticationService.currentUser.subscribe((data: any) => {
			if (data) {
				let session = this.localStorageService.get("session");

				this.user = `${session.user.firstName} ${session.user.lastName}`;
			}
		});
	}

	public onLogout() {
		this.authenticationService.logout();
	}
}
