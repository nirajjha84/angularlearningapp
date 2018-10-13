import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SetupComponent } from './setup/setup.component';
import { TopicsComponent } from './topics/topics.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { QnaComponent } from './qna/qna.component';
import { InterviewComponent } from './interview/interview.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SetupComponent,
    TopicsComponent,
    WeatherappComponent,
    QnaComponent,
    InterviewComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
