import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthCtaComponent } from './sixth-cta.component';

describe('SixthCtaComponent', () => {
  let component: SixthCtaComponent;
  let fixture: ComponentFixture<SixthCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
