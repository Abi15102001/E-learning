import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  isScrolled:boolean =false;

  issbopen:boolean = false;


  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    if(window.pageYOffset > 80){
      this.isScrolled =true;
    }
    else{this.isScrolled=false;}
  }

  opensb(){this.issbopen=true;}

  closesb(){this.issbopen =false;}

  scrollTop(){
    document.body.scrollIntoView({behavior:'smooth'})
  }
}
