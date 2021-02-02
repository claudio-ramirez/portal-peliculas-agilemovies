// Angular
import { Component, OnInit, HostListener } from "@angular/core";

// RxJS
import { forkJoin } from "rxjs";

// Services
import { SystemService } from "src/app/services";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
	public premiereMovies: any;
	public mostPopularMovies: any;

	public imagesMostPopularMovies: Array<any>;

	public finishPage = 50;
	public actualPage: number;
	public showGoUpButton: boolean;

	showScrollHeight = 400;
	hideScrollHeight = 200;

	constructor(private systemService: SystemService) {
		this.premiereMovies = [];
		this.mostPopularMovies = [];

		this.imagesMostPopularMovies = [];

		this.actualPage = 1;
		this.showGoUpButton = false;
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
			this.showGoUpButton = true;
		} else if (this.showGoUpButton && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
			this.showGoUpButton = false;
		}
	}

	ngOnInit() {
		forkJoin({
			premiereMovies: this.getPremiereMovies(1),
			mostPopularMovies: this.getMostPopularMovies(1),
		});
	}

	async getPremiereMovies(page: number) {
		this.systemService.getPremiereMovies(page).subscribe(
			(data: any) => {
				this.premiereMovies = data;

				this.premiereMovies.data.forEach((object: any) => {
					this.imagesMostPopularMovies = [...this.imagesMostPopularMovies, { path: this.premiereMovies.imageBaseUrl + object.poster_path }];
				});
			},
			(error: any) => {
				console.log("Error en el servicio de las películas en estreno", error);
			}
		);
	}

	async getMostPopularMovies(page: number) {
		this.systemService.getMostPopularMovies(page).subscribe(
			(data: any) => {
				this.mostPopularMovies = data;
			},
			(error: any) => {
				console.log("Error en el servicio de las películas más populares", error);
			}
		);
	}

	async addMostPopularMovies(actualPage: number) {
		this.actualPage = actualPage + 1;

		this.systemService.getMostPopularMovies(this.actualPage).subscribe(
			(data: any) => {
				this.mostPopularMovies.data = [...this.mostPopularMovies.data, ...data.data];
			},
			(error: any) => {
				console.log("Error en el servicio de las películas más populares", error);
			}
		);
	}

	onScroll() {
		if (this.actualPage < this.finishPage) {
			this.addMostPopularMovies(this.actualPage);
		} else {
			console.log("Fin de la paginación (Para no sobrecargar la memoria).");
		}
	}

	scrollTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	handleCarouselEvents(event: any) {
		console.log(event);
	}
}
