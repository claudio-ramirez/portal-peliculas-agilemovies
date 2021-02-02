import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "app-footer",
	styleUrls: ["./footer.component.scss"],
	templateUrl: "./footer.component.html"
})
export class FooterComponent implements OnInit {
	public titulo: string;

	constructor(private router: Router) {
		this.titulo = "Sociedad Chilena de Autores e Intérpretes Musicales";
	}

	public ngOnInit() {}
}
