import { Component } from '@angular/core';
import 'hammerjs';
import { faBars, faBookOpen, faHome, faUser, faQuestion, faFile, faCode, faClipboardList, faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  userName = 'Not known';
  faHome = faHome;
  faBars = faBars;
  faBookOpen = faBookOpen;
  faUser = faUser;
  faQuestion = faQuestion;
  faFile = faFile;
  faCode = faCode;
  faClipboardList = faClipboardList;
  faCog = faCog;
}
