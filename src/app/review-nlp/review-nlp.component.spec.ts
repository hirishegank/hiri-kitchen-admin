import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNlpComponent } from './review-nlp.component';

describe('ReviewNlpComponent', () => {
  let component: ReviewNlpComponent;
  let fixture: ComponentFixture<ReviewNlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewNlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewNlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
