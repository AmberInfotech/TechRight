import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ],
    exports: [],
    providers: []
})
export class AuthenticationModule {

}