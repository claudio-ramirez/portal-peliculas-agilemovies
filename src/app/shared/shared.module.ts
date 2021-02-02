// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

// Services
import { AuthenticationService } from "../services";

// Layouts
import { NavbarComponent, FooterComponent, AlertComponent, BreadcrumbComponent } from "./layouts";

@NgModule({
	declarations: [NavbarComponent, FooterComponent, AlertComponent, BreadcrumbComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
	exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, NavbarComponent, FooterComponent, AlertComponent, BreadcrumbComponent],
	providers: [AuthenticationService],
})
export class SharedModule {}
