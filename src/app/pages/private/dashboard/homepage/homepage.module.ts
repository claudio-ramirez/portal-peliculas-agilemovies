// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Routing
import { HomepageRoutingModule } from "./homepage.routing.module";

// Components
import { HomepageComponent } from "./homepage.component";
import { MovieComponent } from "./movie/movie.component";

// Services
import { SystemService } from "src/app/services";

// NGX Bootstrap
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ModalModule } from "ngx-bootstrap/modal";
import { AlertModule } from "ngx-bootstrap/alert";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";

// NGX Infinite Scroll
import { InfiniteScrollModule } from "ngx-infinite-scroll";

// Angular Responsive Carousel
import { IvyCarouselModule } from "angular-responsive-carousel";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HomepageRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		InfiniteScrollModule,
		IvyCarouselModule,
		TooltipModule.forRoot(),
		PaginationModule.forRoot(),
		BsDatepickerModule.forRoot(),
		PopoverModule.forRoot(),
		ModalModule.forRoot(),
		AlertModule.forRoot(),
		ProgressbarModule.forRoot(),
	],
	declarations: [HomepageComponent, MovieComponent],
	exports: [HomepageComponent, MovieComponent],
	providers: [SystemService],
})
export class HomepageModule {}
