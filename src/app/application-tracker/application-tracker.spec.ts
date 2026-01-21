import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTracker } from './application-tracker';

describe('ApplicationTracker', () => {
  let component: ApplicationTracker;
  let fixture: ComponentFixture<ApplicationTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
