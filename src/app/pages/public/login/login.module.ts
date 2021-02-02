// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Enrutador
import { LoginRoutingModule } from "./login.routing.module";

// FontAwesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule, FontAwesomeModule]
})
export class LoginModule {}
