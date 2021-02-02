// Angular
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Services
import { AuthenticationService, AlertService, LocalStorageService } from "../../../services";

// Animations
import { fadeInAnimation } from "src/app/shared/animations";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
	animations: [fadeInAnimation],
	host: { "[@fadeInAnimation]": "" },
})
export class LoginComponent implements OnInit {
	public formLogin: FormGroup;

	public title: string;
	public loading: boolean;
	public submitted: boolean;
	public returnUrl: string;

	public logo: string;

	// Options Alerts
	public options = {
		autoClose: false,
		keepAfterRouteChange: false,
	};

	constructor(
		private formBuilder: FormBuilder,
		private activateRoute: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticationService,
		private alertService: AlertService,
		private localStorageService: LocalStorageService
	) {
		this.title = "Inicio de Sesión";
		this.loading = false;
		this.submitted = false;
		this.returnUrl = "";
		this.logo = "assets/images/logo.png";

		this.formLogin = this.formBuilder.group({
			username: ["", Validators.required],
			password: ["", Validators.required],
		});

		if (this.authenticationService.currentUserValue) {
			this.router.navigate(["/private/dashboard/homepage"]);
		}
	}

	ngOnInit() {
		this.returnUrl = this.activateRoute.snapshot.queryParams["returnUrl"] || "private/dashboard/homepage";
	}

	get f() {
		return <any>this.formLogin.controls;
	}

	sendForm() {
		this.submitted = true;

		this.loading = true;

		if (this.formLogin.invalid) {
			this.loading = false;

			return;
		}

		this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(
			(data: any) => {
				this.localStorageService.set("session", data.data);

				this.authenticationService.activateUser(true);

				this.router.navigate(["private/dashboard/homepage"]);
			},
			(error: any) => {
				this.alertService.error("Error en la autentificación", this.options);

				this.loading = false;
			}
		);
	}
}
