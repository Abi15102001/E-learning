import { Component, Input } from '@angular/core';
import { feedBack } from 'src/app/Modal-classes/feedBacks.modal';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})
export class FeedbackCardComponent {
@Input('item')
item!:feedBack;
}
