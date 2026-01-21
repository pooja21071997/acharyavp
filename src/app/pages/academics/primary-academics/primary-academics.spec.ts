import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAcademics } from './primary-academics';

describe('PrimaryAcademics', () => {
  let component: PrimaryAcademics;
  let fixture: ComponentFixture<PrimaryAcademics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryAcademics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryAcademics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
