import { ReviewServiceService } from "./reviewService.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ManageChefServiceService } from "./manage-chef-service.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthenticationService } from "./authentication.service";
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireModule } from "@angular/fire";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CountComponent } from "./count/count.component";
import { OverviewComponent } from "./overview/overview.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { from } from "rxjs";
import { StarratingComponent } from "./starrating/starrating.component";
import { ChefmanagementComponent } from "./chefmanagement/chefmanagement.component";
import { SettingsComponent } from "./settings/settings.component";
import { ForecastComponent } from "./forecast/forecast.component";
import { ReportComponent } from "./report/report.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReviewComponent } from "./review/review.component";
import { ReviewNlpComponent } from "./review-nlp/review-nlp.component";
import { ReportGenerationComponent } from "./report-generation/report-generation.component";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-daialog.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CountComponent,
    OverviewComponent,
    CollapseComponent,
    StarratingComponent,
    ChefmanagementComponent,
    SettingsComponent,
    ForecastComponent,
    ReportComponent,
    ReviewComponent,
    ReviewNlpComponent,
    ReportGenerationComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    NgModule,
    AuthenticationService,
    ManageChefServiceService,
    AngularFireAuth,
    AngularFirestore,
    ReviewServiceService,
    ConfirmationDialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule {}
