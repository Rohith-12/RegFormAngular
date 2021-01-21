import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { RegComponent } from "./reg/reg.component";
import { FormsModule } from "@angular/forms";
import { RoutesComponent } from "./routes/routes.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { ProfessionalformComponent } from "./professionalform/professionalform.component";
import { EducationformComponent } from "./educationform/educationform.component";
import { AnimiComponent } from "./animi/animi.component";

const routes3: Routes = [
  { path: "", component: RegComponent },

  { path: "next", component: FormComponent },

  { path: "professional", component: ProfessionalformComponent },
  { path: "education", component: EducationformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    RegComponent,
    RoutesComponent,
    SpinnerComponent,
    ProfessionalformComponent,
    EducationformComponent,
    AnimiComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes3),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
