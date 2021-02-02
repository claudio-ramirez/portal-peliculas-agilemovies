// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routing
import { DashboardRoutingModule } from "./dashboard.routing.module";

// Components
import { DashboardComponent } from "./dashboard.component";

@NgModule({
	imports: [CommonModule, DashboardRoutingModule],
	declarations: [DashboardComponent],
})
export class DashboardModule {}
