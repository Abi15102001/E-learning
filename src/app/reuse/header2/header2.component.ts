import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {

@Input('subHeading')
subHeading ='';  
@Input('heading1')
heading1 ='';  
@Input('heading2')
heading2 ='';  
}
