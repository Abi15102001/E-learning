import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sociallinks',
  templateUrl: './sociallinks.component.html',
  styleUrls: ['./sociallinks.component.css']
})
export class SociallinksComponent {
@Input('align')
align ="center"
}
