import { Component, Input} from '@angular/core';
import { blogs } from 'src/app/Modal-classes/blogs.modal';
import { course } from 'src/app/Modal-classes/course.modal';


@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent {

  @Input('blog')
  blog!:blogs;
}
