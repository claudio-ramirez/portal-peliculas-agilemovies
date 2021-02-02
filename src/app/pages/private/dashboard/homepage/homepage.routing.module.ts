// Angular
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomepageComponent } from "./homepage.component";
import { MovieComponent } from "./movie/movie.component";

// Guards
import { AuthenticationGuard } from "../../../../shared/guards";

const routesHomepage: Routes = [
	{
		path: "",
		component: HomepageComponent,
		canActivate: [AuthenticationGuard],
	},
	{
		path: "movie/:id",
		component: MovieComponent,
		canActivate: [AuthenticationGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routesHomepage)],
	exports: [RouterModule]
})
export class HomepageRoutingModule {}
