// Angular
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Guards
import { AuthenticationGuard } from "../../../shared/guards";

// Components
import { DashboardComponent } from "./dashboard.component";

const routesDashboard: Routes = [
	{
		path: "",
		component: DashboardComponent,
		children: [
			{
				path: "homepage",
				loadChildren: () => import("./homepage/homepage.module").then((m) => m.HomepageModule),
				canActivate: [AuthenticationGuard],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routesDashboard)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
