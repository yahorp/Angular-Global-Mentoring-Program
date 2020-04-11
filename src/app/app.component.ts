import { Component } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CourseService]
})
export class AppComponent {
  title = 'angular-mentoring';
}
