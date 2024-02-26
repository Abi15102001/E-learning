import { Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Client } from 'src/app/Modal-classes/clients.modal';
import { feedBack } from 'src/app/Modal-classes/feedBacks.modal';
import { SlideConfig } from 'src/app/Modal-classes/slideConfig.modal';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('slideContainer')
  slideContainer!: ElementRef;

  @ContentChild('template')
  template: TemplateRef<any> | undefined;

  ngOnInit() {
    console.log(this.slideConfig);

  }

  ngAfterViewInit() {
    this.setUpSlider()
  }

  getItems() {
    return this.items as any[]
  }

  dots: number[] = [];

  activeSlideId = 1;

  @Input('items')
  items: string[] | feedBack[] | Client[] = [];

  @Output('select')
  onSelect: EventEmitter<string> = new EventEmitter<string>()

  @Input('slideConfig')
  slideConfig = new SlideConfig();


  slidercontainerWidth = 0;
  slideWidth = 0;
  elementToShow = 1;
  sliderWidth = 0;
  sliderMarginLeft = 0;

  @HostListener('window:resize', ['$event'])
  onScreenResize() {
    this.setUpSlider()
    
  }

  setUpSlider() {

    if (window.innerWidth < 500)
      this.elementToShow = this.slideConfig.breakPoints.sm;
    else if (window.innerWidth < 900)
      this.elementToShow = this.slideConfig.breakPoints.md;
    else if (window.innerWidth < 1300)
      this.elementToShow = this.slideConfig.breakPoints.lg;
    else
      this.elementToShow = this.slideConfig.breakPoints.xl;

    if (this.items.length < this.elementToShow) {
      this.elementToShow = this.items.length;
    }

    this.dots = Array(this.items.length - this.elementToShow + 1);

    let container = this.slideContainer.nativeElement as HTMLElement;
    this.slidercontainerWidth = container.clientWidth;
    this.slideWidth = this.slidercontainerWidth / this.elementToShow;
    this.sliderWidth = this.slideWidth * this.items.length;

    // console.log(this.slideWidth);
    // console.log(this.sliderWidth);
    // console.log(this.slidercontainerWidth);
    if(this.slideConfig.autoPlay) this.autoPlay()
  }

  previous() {
    if (this.sliderMarginLeft === 0) {
      return
    }
    this.activeSlideId--;
    this.sliderMarginLeft = this.sliderMarginLeft + this.slideWidth;
  }

  next() {
    const temp = this.items.length - this.elementToShow;
    const temp1 = -(temp * this.slideWidth);
    if (this.sliderMarginLeft <= temp1) {
      return
    }
    this.activeSlideId++;
    this.sliderMarginLeft = this.sliderMarginLeft - this.slideWidth;
  }

  move(slideId: number) {
    console.log('slideId' + slideId);
    console.log("activeslideId" + this.activeSlideId);

    let difference = slideId - this.activeSlideId;
    if (difference > 0) {
      for (let index = 0; index < difference; index++) {
        this.next()
      }
    }
    else if (difference < 0) {
      for (let index = 0; index < Math.abs(difference); index++) {
        this.previous()
      }
    }
  }

  // autoPlay(){
  //   setInterval(()=>{
  //     this.next()
  //   },1000)
  // }
  autoPlay() {
    const intervalTime = 2000; // Time in milliseconds between each slide change
    let intervalId: any;
  
    const moveNext = () => {
      this.next();
      if (this.activeSlideId === this.items.length) {
        this.activeSlideId = 1;
        this.sliderMarginLeft = 0;
        setTimeout(() => {
          this.sliderMarginLeft = -this.slideWidth;
        }, 0);
      }
    };
  
    intervalId = setInterval(moveNext, intervalTime);
  
    // Stop the autoplay when the mouse is over the slider
    this.slideContainer.nativeElement.addEventListener('mouseenter', () => {
      clearInterval(intervalId);
    });
  
    // Resume autoplay when the mouse leaves the slider
    this.slideContainer.nativeElement.addEventListener('mouseleave', () => {
      intervalId = setInterval(moveNext, intervalTime);
    });
  }
  
}
