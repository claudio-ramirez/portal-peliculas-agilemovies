// Angular
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

// Services
import { AuthenticationService } from "src/app/services";

// Animations
import { fadeInAnimation } from "src/app/shared/animations";

@Component({
	selector: "app-not-found",
	templateUrl: "./not-found.component.html",
	styleUrls: ["./not-found.component.scss"],
	animations: [fadeInAnimation],
	host: { "[@fadeInAnimation]": "" }
})
export class NotFoundComponent implements OnInit {
	title: string;
	subtitle: string;
	pathImage: string;

	activeSession: boolean;

	constructor(private router: Router, private activateRoute: ActivatedRoute, private authenticationService: AuthenticationService) {
		this.title = "Página No Encontrada";
		this.subtitle = "Error 404";
		this.pathImage = "assets/images/error404.jpg";

		const currentUser = this.authenticationService.currentUserValue;

		if (currentUser) {
			this.activeSession = true;
		} else {
			this.activeSession = false;
		}
	}

	ngOnInit() {}
}
