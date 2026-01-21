import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMatch } from './skill-match';

describe('SkillMatch', () => {
  let component: SkillMatch;
  let fixture: ComponentFixture<SkillMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
