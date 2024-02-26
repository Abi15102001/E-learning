import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociallinksComponent } from './sociallinks.component';

describe('SociallinksComponent', () => {
  let component: SociallinksComponent;
  let fixture: ComponentFixture<SociallinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SociallinksComponent]
    });
    fixture = TestBed.createComponent(SociallinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
