import { Component, Input } from '@angular/core';
import { course } from 'src/app/Modal-classes/course.modal';

@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.css']
})
export class CourseFooterComponent {

  @Input('course')
   course!:course; 
}
