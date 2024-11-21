import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAnnouncementsComponent } from './events-announcements.component';

describe('EventsAnnouncementsComponent', () => {
  let component: EventsAnnouncementsComponent;
  let fixture: ComponentFixture<EventsAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsAnnouncementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
