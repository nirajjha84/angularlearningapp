import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { SetupComponent } from './setup/setup.component';
import { TopicsComponent } from './topics/topics.component';
import { QnaComponent } from './qna/qna.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { InterviewComponent } from './interview/interview.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'qna', component: QnaComponent },
  { path: 'weatherapp', component: WeatherappComponent },
  { path: 'interview', component: InterviewComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
