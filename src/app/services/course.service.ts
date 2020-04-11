import { Injectable } from '@angular/core';
import { COURSES } from '../pages/course/shared/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses() {
    return Promise.resolve(COURSES);
  }
}
