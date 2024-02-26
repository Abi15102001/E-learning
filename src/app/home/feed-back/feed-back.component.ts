import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { feedBack } from 'src/app/Modal-classes/feedBacks.modal';
import { SlideConfig } from 'src/app/Modal-classes/slideConfig.modal';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent {
    httpclient: any;
    constructor(private http:HttpClient){}
    feedBacks:feedBack [] =[];
    
    slideConfig = new SlideConfig()

    ngOnInit(){
      // this.feedback.getFeedback().subscribe((res) =>{
      //   this.feedBacks = res as unknown as feedBack[];
      //   console.log(res);
      // })
      this.slideConfig.breakPoints ={ sm:1,md:1,lg:2,xl:2}
      this.slideConfig.showLRarrow=false;
      this.slideConfig.showDots =true;
      this.getAllFeedbacks()
      
    }

    getAllFeedbacks(){
      this.http.get('assets/data/feedbacks.json').subscribe({
           next:(feedBack)=>{
          this.feedBacks = feedBack as feedBack[] ;
          console.log(this.feedBacks);
          
          
        },
        error:(errors: any)=>{
          console.log(errors);
          
        }
        
      })
    }
}
