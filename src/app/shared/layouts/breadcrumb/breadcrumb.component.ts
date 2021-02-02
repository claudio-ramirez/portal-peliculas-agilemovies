import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "app-breadcrumb",
	styleUrls: ["./breadcrumb.component.scss"],
	templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent implements OnInit {
	public titulo: string;

	constructor(private router: Router) {
		this.titulo = "Sociedad Chilena de Autores e Intérpretes Musicales";
	}

	public ngOnInit() {}
}
