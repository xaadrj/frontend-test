import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhCtaComponent } from './seventh-cta.component';

describe('SeventhCtaComponent', () => {
  let component: SeventhCtaComponent;
  let fixture: ComponentFixture<SeventhCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
