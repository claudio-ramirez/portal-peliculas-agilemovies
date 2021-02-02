// Angular
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { LoginComponent } from "./pages/public/login/login.component";
import { NotFoundComponent } from "./pages/public/not-found/not-found.component";

// Guards
import { AuthenticationGuard } from "./shared/guards";

const routes: Routes = [
	{
		path: "",
		redirectTo: "login",
		pathMatch: "full",
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "not-found",
		component: NotFoundComponent,
	},
	{
		path: "private",
		loadChildren: () => import("./pages/private/private.module").then((m) => m.PrivateModule),
		canActivate: [AuthenticationGuard],
	},
	{
		path: "**",
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
