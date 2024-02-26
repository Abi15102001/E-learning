import { Component,Input } from '@angular/core';
import { blogs } from 'src/app/Modal-classes/blogs.modal';
import { course } from 'src/app/Modal-classes/course.modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input('input')
  input!:course|blogs;

  @Input('type')
  type='C';

  castTOCourse(input:course|blogs){
    return input as course;
  }

  castToBlog(input:course|blogs){
    return input as blogs;
  }

}
