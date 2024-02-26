import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
@Input ('showNumber')
  showNumber:boolean =true;
  
  @Input('value')
  value = 0;
  
  totalStars = 5;
}
