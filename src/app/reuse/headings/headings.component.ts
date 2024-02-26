import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.css']
})
export class HeadingsComponent {
@Input('subHeading')
subHeading = '';
@Input('headingText1')
headingText1='';
@Input('headingText2')
headingText2='';
@Input('headingText3')
headingText3='';

@Input('specialHeading')
specialHeading:number|string=0;
@Input('align')
align='';
}
