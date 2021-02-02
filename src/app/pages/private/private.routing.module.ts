// Angular
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { PrivateComponent } from "./private.component";

// Guards
import { AuthenticationGuard } from "../../shared/guards";

const routesPrivate: Routes = [
	{
		path: "",
		component: PrivateComponent,
		children: [
			{
				path: "dashboard",
				loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
				canActivate: [AuthenticationGuard],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routesPrivate)],
	exports: [RouterModule]
})
export class PrivateRoutingModule {}
