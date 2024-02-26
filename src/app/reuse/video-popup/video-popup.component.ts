import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.css']
})
export class VideoPopupComponent {

  constructor(private sanitizer: DomSanitizer) { }

  @Input('videoUrl')
  videoUrl: undefined | string = undefined;

  safeVideoUrl!: SafeResourceUrl;

  @Input('show')
  show!: boolean;

  @Output('closePopUp')
  closePopUp = new EventEmitter()

  disableBodyScroll() { document.body.style.setProperty('overflow', 'hidden') }

  enableBodyScroll() { document.body.style.setProperty('overflow', 'scroll') }

  ngOnInit() { this.init() }

  ngOnChanges() { this.init() }

  close() {
    this.enableBodyScroll()
    this.closePopUp.emit()
  }

  init() {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl as string)
    if (this.show) this.disableBodyScroll()
  }
}
