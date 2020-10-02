import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisPageComponent } from './about-this-page.component';

describe('AboutThisPageComponent', () => {
  let component: AboutThisPageComponent;
  let fixture: ComponentFixture<AboutThisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutThisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutThisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
