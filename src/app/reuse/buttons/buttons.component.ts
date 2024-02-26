import { Component, Input, } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  [x: string]: any;
  
  @Input('size')
  size ='';//S,M,L
  
  @Input('shades')
  shades =''; //D, L,W

  @Input('name')
  name='';

  @Input('route')
  route=''

  navigateToPath() {
    if (this.route) {
      this['router'].navigate([this.route]);
    }
  }

}
