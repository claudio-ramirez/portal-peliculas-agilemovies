// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routing
import { PrivateRoutingModule } from "./private.routing.module";

// Components
import { PrivateComponent } from "./private.component";

@NgModule({
	declarations: [PrivateComponent],
	imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
