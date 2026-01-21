import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePrimaryAcademics } from './pre-primary-academics';

describe('PrePrimaryAcademics', () => {
  let component: PrePrimaryAcademics;
  let fixture: ComponentFixture<PrePrimaryAcademics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePrimaryAcademics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePrimaryAcademics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
