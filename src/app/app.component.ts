import { Component } from '@angular/core';
import 'hammerjs';
import {
  faAngleLeft, faBars, faBookOpen, faHome, faUser, faQuestion, faFile, faCode, faClipboardList, faCog, faArrowCircleLeft 
} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _location: Location) {
  }

  title = 'Angular Tutorial';
  currentDate = new Date();
  faHome = faHome;
  faBars = faBars;
  faBookOpen = faBookOpen;
  faUser = faUser;
  faQuestion = faQuestion;
  faFile = faFile;
  faCode = faCode;
  faClipboardList = faClipboardList;
  faArrowCircleLeft = faArrowCircleLeft;
  faCog = faCog;
  faAngleLeft = faAngleLeft;

  /** 
   * method will take user to back screen
   * It is applied on global app toolbar
  */
  navigateBack() {
    this._location.back();
  }
}
