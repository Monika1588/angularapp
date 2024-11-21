import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtSectionComponent } from './doubt-section.component';

describe('DoubtSectionComponent', () => {
  let component: DoubtSectionComponent;
  let fixture: ComponentFixture<DoubtSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubtSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubtSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
