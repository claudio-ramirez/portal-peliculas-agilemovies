// Angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";

// RxJS
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

// Services
import { SystemService } from "src/app/services";

@Component({
	selector: "app-movie",
	templateUrl: "./movie.component.html",
	styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
	public idMovie: number;

	public state$!: Observable<any>;

	public actorsPerMovies: any;
	public imagesActorsPerMovies: Array<any>;

	constructor(private systemService: SystemService, private activatedRoute: ActivatedRoute) {
		this.idMovie = 0;
		this.actorsPerMovies = {};
		this.imagesActorsPerMovies = [];
	}

	ngOnInit() {
		this.idMovie = Number(this.activatedRoute.snapshot.paramMap.get("id"));

console.log("Route Data", this.activatedRoute.snapshot.data);

		this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));

		this.getActorsPerMovies(this.idMovie);
	}

	async getActorsPerMovies(idMovie: number) {
		this.systemService.getActorsPerMovies(idMovie).subscribe(
			(data: any) => {
				this.actorsPerMovies = data;

				this.actorsPerMovies.data.forEach((object: any) => {
					this.imagesActorsPerMovies = [...this.imagesActorsPerMovies, { path: this.actorsPerMovies.imageBaseUrl + object.profile_path }];
				});
			},
			(error: any) => {
				console.log("Error en el servicio de las películas en estreno", error);
			}
		);
	}

	handleCarouselEvents(event: any) {
		console.log(event);

	};
}
