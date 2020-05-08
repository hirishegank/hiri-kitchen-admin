import { ReportGenerationComponent } from './report-generation/report-generation.component';
import { ReviewNlpComponent } from './review-nlp/review-nlp.component';
import { LoginComponent } from './login/login.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportComponent } from './report/report.component';
import { ReviewComponent } from './review/review.component';
import { ChefmanagementComponent } from './chefmanagement/chefmanagement.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'overview', component: OverviewComponent },
  { path: 'Management', component: ChefmanagementComponent },
  { path: 'Review', component: ReviewComponent },
  { path: 'Reports', component: ReportComponent },
  { path: 'Forecast', component: ForecastComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'Review/reviewNlp/:chefid', component: ReviewNlpComponent },
  { path: 'Reports/generation/:chefid', component:ReportGenerationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
