// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Routing
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from "./pages/public/login/login.component";
import { NotFoundComponent } from "./pages/public/not-found/not-found.component";

// Interceptors
import { JwtInterceptor, ErrorInterceptor } from "./shared/interceptors";

// Shared
import { SharedModule } from "./shared/shared.module";

@NgModule({
	declarations: [AppComponent, LoginComponent, NotFoundComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, ReactiveFormsModule, FormsModule],
	providers: [
		LoginComponent,
		NotFoundComponent,
		DatePipe,
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
