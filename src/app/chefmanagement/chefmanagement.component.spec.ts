import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefmanagementComponent } from './chefmanagement.component';

describe('ChefmanagementComponent', () => {
  let component: ChefmanagementComponent;
  let fixture: ComponentFixture<ChefmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
